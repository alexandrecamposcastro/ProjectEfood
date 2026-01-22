import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-color: ${cores.bege};
  padding: 24px;
  display: flex;
  align-items: center;
  /* Se houver uma classe informando que é home, mantém a margem. Se não, zero. */
  margin-bottom: ${(props) => (props.className === 'home' ? '80px' : '0')};
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  h1 {
    margin-top: 138px;
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
    text-align: center;
  }

  &.profile-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    h1 { display: none; }
  }
`

export const Logo = styled.img`
  width: 125px;
`

export const LinkItem = styled(Link)`
  color: ${cores.vermelha};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
`

export const CartButton = styled.span`
  color: ${cores.vermelha};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`