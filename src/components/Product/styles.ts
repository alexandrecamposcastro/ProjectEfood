import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const Card = styled.div`
  background-color: ${cores.vermelha};
  padding: 8px;
  color: ${cores.bege};

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    display: block;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`