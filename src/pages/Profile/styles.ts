import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const Hero = styled.div`
  height: 280px;
  width: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-color: rgba(0,0,0, 0.5); /* Overlay escuro */
  }

  .container {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 0;
    
    .categoria { font-weight: 100; font-size: 32px; color: #fff; }
    .nome { font-weight: 900; font-size: 32px; color: #fff; }
  }
`

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CardProduto = styled.div`
  background-color: ${cores.vermelha};
  padding: 8px;
  color: ${cores.bege};
  
  img { width: 100%; height: 167px; object-fit: cover; }
`

export const TituloPrato = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin: 8px 0;
`

export const DescricaoPrato = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const BotaoProduto = styled.button`
  width: 100%;
  padding: 4px;
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  font-weight: bold;
  border: none;
  cursor: pointer;
`