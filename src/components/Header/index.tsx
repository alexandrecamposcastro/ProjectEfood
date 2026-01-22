import { HeaderBar, HeaderContent, Logo, LinkItem, CartButton } from './styles'
import logo from '../../assets/logo.png' 

type Props = {
  type: 'home' | 'profile'
}

const Header = ({ type }: Props) => (
  <HeaderBar style={{ backgroundImage: 'url(/assets/fundo.png)' }}> 
    <div className="container">
      {type === 'home' ? (
        <HeaderContent>
          <Logo src={logo} alt="efood" />
          <h1>Viva experiências gastronômicas<br />no conforto da sua casa</h1>
        </HeaderContent>
      ) : (
        <HeaderContent className="profile-header">
          <LinkItem to="/">Restaurantes</LinkItem>
          <Logo src={logo} alt="efood" />
          <CartButton>0 produto(s) no carrinho</CartButton>
        </HeaderContent>
      )}
    </div>
  </HeaderBar>
)

export default Header