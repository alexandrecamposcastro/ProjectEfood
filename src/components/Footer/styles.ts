import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 32px 0 80px;

  li {
    img {
      width: 24px;
      height: 24px;
    }
  }
`

export const TextoFooter = styled.p`
  font-size: 10px;
  color: ${cores.vermelha};
  max-width: 480px;
  margin: 0 auto;
  line-height: 12px;
`