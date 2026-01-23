import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyle'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelha};
  z-index: 101;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 { font-size: 18px; font-weight: 900; }
  .remove {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url('/assets/lixeira.png');
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
  }
`

export const QuantityContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  button { border: none; cursor: pointer; padding: 2px 6px; }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  margin-top: 40px;
  font-weight: 700;
`

export const ButtonCheckout = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelha};
  border: none;
  width: 100%;
  padding: 4px;
  font-weight: 700;
  margin-top: 16px;
  cursor: pointer;
`