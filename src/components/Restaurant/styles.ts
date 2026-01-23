import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles/GlobalStyle'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelha};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 472px;
  margin: 0 auto;
`

export const Capa = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const Infos = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top: 1px solid ${cores.vermelha};
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: ${cores.vermelha};
`

export const NotaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 18px;
    font-weight: 700;
    color: ${cores.vermelha};
  }

  img {
    width: 21px;
    height: 21px;
    object-fit: contain;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
  color: ${cores.vermelha};
`

export const Botao = styled(Link)`
  background-color: ${cores.vermelha};
  color: ${cores.bege};
  padding: 4px 6px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  width: fit-content;
`

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: ${cores.vermelha};
  color: ${cores.bege};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
`