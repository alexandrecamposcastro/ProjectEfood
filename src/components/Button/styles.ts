import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles/GlobalStyle'

export const ButtonContainer = styled(Link)`
  background-color: ${cores.vermelha};
  color: ${cores.bege};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
`

export const ButtonAction = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  border: none;
  padding: 4px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`