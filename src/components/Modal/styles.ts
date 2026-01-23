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
  z-index: 1000;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`

export const ModalContent = styled.div`
  background-color: ${cores.vermelha};
  color: ${cores.branco};
  padding: 32px;
  max-width: 1024px;
  width: 90%;
  display: flex;
  position: relative;
  z-index: 1001;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    max-height: 90vh;
    overflow-y: auto;
    
    img {
      width: 100% !important;
      height: 200px !important;
      margin-right: 0 !important;
      margin-bottom: 16px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  div {
    display: flex;
    flex-direction: column;
    
    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }

    button {
      background-color: ${cores.bege};
      color: ${cores.vermelha};
      border: none;
      padding: 4px 8px;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      width: fit-content;
    }
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  
  img {
    width: 16px !important;
    height: 16px !important;
    margin: 0 !important;
  }
`