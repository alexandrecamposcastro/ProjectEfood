import styled from 'styled-components'

export const Container = styled.div`
  color: #FFEBD9;
  
  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #FFEBD9;
`

export const InputGroup = styled.div`
  display: block;
  width: 100%;

  label {
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: #FFEBD9;
    border: 1px solid #FFEBD9;
    height: 32px;
    padding: 0 8px;
    width: 100%;
    margin-bottom: 8px;
    font-weight: bold;
    color: #4b4b4b;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
  
  div {
    flex: 1;
  }
`

export const ButtonGroup = styled.div`
  margin-top: 24px;
`

export const Button = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;

  &:hover {
    opacity: 0.8;
  }
`