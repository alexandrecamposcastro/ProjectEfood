import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 100;
  &.is-open { display: flex; }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`
export const Sidebar = styled.aside`
  background-color: #E66767;
  z-index: 101;
  padding: 32px 8px;
  width: 360px;
  height: 100%;
  overflow-y: auto;
  .empty-text { color: #FFEBD9; text-align: center; }
`
export const CartItem = styled.li`
  display: flex;
  background-color: #FFEBD9;
  padding: 8px;
  position: relative;
  margin-bottom: 16px;
  img { height: 80px; width: 80px; object-fit: cover; margin-right: 8px; }
  h3 { color: #E66767; font-weight: bold; font-size: 18px; }
  span { display: block; color: #E66767; font-size: 14px; margin-top: 8px; }
  
  .quantity-control {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    button {
      background-color: #E66767;
      color: #FFEBD9;
      border: none;
      width: 20px;
      height: 20px;
      cursor: pointer;
      font-weight: bold;
      border-radius: 4px;
    }
    strong { color: #E66767; }
  }

  .remove-btn {
    background-image: url('https://raw.githubusercontent.com/gian-lopes/efood/main/src/assets/images/lixeira.png');
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #FFEBD9;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const ButtonCheckout = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 8px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`