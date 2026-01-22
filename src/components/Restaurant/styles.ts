import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.brancaPura};
  border: 1px solid ${cores.vermelha};
  position: relative;
  margin-bottom: 48px;
`

export const Capa = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const Infos = styled.div`
  padding: 8px;
  
  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    
    span { color: ${cores.amarelo}; margin-left: 8px; }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: ${cores.vermelha};
  color: ${cores.bege};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
`

export const Botao = styled(Link)`
  background-color: ${cores.vermelha};
  color: ${cores.bege};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: inline-block;
`