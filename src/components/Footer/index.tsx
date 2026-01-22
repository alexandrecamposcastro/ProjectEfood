/* eslint-disable jsx-a11y/anchor-is-valid */
import { FooterContainer, SocialLinks, TextoFooter } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img src="/assets/logo.png" alt="efood" />
      <SocialLinks>
        <li>
          <a href="#">
            <img src="/assets/instagram.svg" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/facebook.svg" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/assets/twitter.svg" alt="Twitter" />
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