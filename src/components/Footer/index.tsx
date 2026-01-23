/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin: 32px 0 80px;
  padding: 0;

  li {
    img {
      width: 24px; 
      height: 24px;
      object-fit: contain;
    }
  }
`

const FooterText = styled.p`
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  line-height: 12px;
  color: ${cores.vermelha};
`

const LogoFooter = styled.img`
  width: 125px;
  height: auto;
`

const Footer = () => (
  <FooterContainer>
    <Link to="/">
      <LogoFooter src="/assets/logo.png" alt="efood" />
    </Link>
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
    <FooterText>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
    </FooterText>
  </FooterContainer>
)

export default Footer