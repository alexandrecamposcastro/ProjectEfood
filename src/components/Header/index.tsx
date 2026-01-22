import { HeaderBar, HeaderContent, LinkItem, CartButton, TituloHome } from './styles'

type Props = {
  type: 'home' | 'profile'
}

const Header = ({ type }: Props) => (
  <HeaderBar className={type}>
    <div className="container">
      {type === 'home' ? (
        <div className="header-home">
          <img src="/assets/logo.png" alt="efood" />
          <TituloHome>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </TituloHome>
        </div>
      ) : (
        <HeaderContent>
          <LinkItem href="/">Restaurantes</LinkItem>
          <img src="/assets/logo.png" alt="efood" className="logo-profile" />
          <CartButton>0 produto(s) no carrinho</CartButton>
        </HeaderContent>
      )}
    </div>
  </HeaderBar>
)

export default Header