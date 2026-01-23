import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const HeaderBar = styled.header`
  background-image: url('/assets/fundo.png');
  background-size: cover;
  padding: 40px 0;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr; 
  align-items: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  /* Estilo dos links laterais */
  a, span {
    color: ${cores.vermelha};
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
  }

  span {
    text-align: right;
  }
`

export const Logo = styled.img`
  width: 125px; 
  height: 57px;
  object-fit: contain; 
  margin: 0 40px; 
`

export const HomeHeader = styled.header`
  background-image: url('/assets/fundo.png');
  background-size: cover;
  padding: 40px 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${cores.vermelha};
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    margin-top: 52px;
    max-width: 540px;
  }
`