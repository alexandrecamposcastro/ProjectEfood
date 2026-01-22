/* eslint-disable jsx-a11y/anchor-is-valid */
import { FooterContainer, SocialLinks, TextoFooter } from './styles'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src={logo} alt="efood" />
      <SocialLinks>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </SocialLinks>
      <TextoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado.
      </TextoFooter>
    </div>
  </FooterContainer>
)

export default Footer