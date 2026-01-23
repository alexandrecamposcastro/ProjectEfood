import { useDispatch, useSelector } from 'react-redux'
import { RootState, remove, incrementar, decrementar, close } from '../../store'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador: number, item) => {
      return acumulador + (item.preco * item.quantidade)
    }, 0)
  }

  if (!isOpen) return null

  return (
    <S.CartContainer>
      <S.Overlay onClick={() => dispatch(close())} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>R$ {item.preco.toFixed(2)}</p>
                <S.QuantityContainer>
                  <button onClick={() => dispatch(decrementar(item.id))}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => dispatch(incrementar(item.id))}>+</button>
                </S.QuantityContainer>
              </div>
              <button className="remove" onClick={() => dispatch(remove(item.id))} />
            </S.CartItem>
          ))}
        </ul>
        <S.TotalContainer>
          <p>Valor total</p>
          <span>R$ {getTotalPrice().toFixed(2)}</span>
        </S.TotalContainer>
        <S.ButtonCheckout>Continuar com a entrega</S.ButtonCheckout>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart