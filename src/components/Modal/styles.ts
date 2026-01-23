import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 11;
  background-color: ${cores.vermelha};
  color: #fff;
  padding: 32px;
  display: flex;
  gap: 24px;
  max-width: 1024px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 { font-size: 18px; font-weight: 900; margin-bottom: 16px; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 16px; }
  
  button {
    background-color: ${cores.bege};
    color: ${cores.vermelha};
    border: none;
    padding: 4px 8px;
    font-weight: bold;
    cursor: pointer;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`