import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const HeaderBar = styled.header`
  width: 100%;
  background-image: url("/assets/fundo.png");
  background-size: cover;
  padding: 40px 0;
  
  .header-home {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
      margin-bottom: 138px;
    }
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* Isso garante que o logo fique centralizado no profile */
  & > a, & > span {
    width: 250px; 
  }
`

export const LinkItem = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${cores.vermelha};
  font-size: 18px;
`

export const CartButton = styled.span`
  font-weight: bold;
  color: ${cores.vermelha};
  font-size: 18px;
  text-align: right;
  cursor: pointer;
`

export const TituloHome = styled.h1`
  max-width: 540px;
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  color: ${cores.vermelha};
`