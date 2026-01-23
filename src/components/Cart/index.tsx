import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { close, remove, add, decrement } from '../../store/reducers/cart'
import Checkout from '../Checkout'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const [isCheckout, setIsCheckout] = useState(false)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)
  }

  if (!isOpen) return null

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={() => { dispatch(close()); setIsCheckout(false); }} />
      <S.Sidebar>
        {!isCheckout ? (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <S.CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>R$ {item.preco.toFixed(2)}</span>
                        <div className="quantity-control">
                          <button type="button" onClick={() => dispatch(decrement(item.id))}>-</button>
                          <strong>{item.quantidade}</strong>
                          <button type="button" onClick={() => dispatch(add(item))}>+</button>
                        </div>
                      </div>
                      <button className="remove-btn" onClick={() => dispatch(remove(item.id))} type="button" />
                    </S.CartItem>
                  ))}
                </ul>
                <S.TotalContainer>
                  <p>Valor total</p>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </S.TotalContainer>
                <S.ButtonCheckout type="button" onClick={() => setIsCheckout(true)}>
                  Continuar com a entrega
                </S.ButtonCheckout>
              </>
            ) : (
              <p className="empty-text">O carrinho está vazio.</p>
            )}
          </>
        ) : (
          <Checkout onBack={() => setIsCheckout(false)} />
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart