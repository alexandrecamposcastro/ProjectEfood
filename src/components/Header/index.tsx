import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { open, RootState } from '../../store'
import * as S from './styles'

type Props = {
  type: 'home' | 'profile'
}

const Header = ({ type }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  if (type === 'home') {
    return (
      <S.HomeHeader>
        <Link to="/">
          <S.Logo src="/assets/logo.png" alt="efood" />
        </Link>
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </S.HomeHeader>
    )
  }

  return (
    <S.HeaderBar>
      <S.HeaderContainer className="container">
        {/* Lado Esquerdo */}
        <Link to="/">Restaurantes</Link>
        
        {/* Centro */}
        <Link to="/">
          <S.Logo src="/assets/logo.png" alt="efood" />
        </Link>

        {/* Lado Direito */}
        <span onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </span>
      </S.HeaderContainer>
    </S.HeaderBar>
  )
}

export default Header