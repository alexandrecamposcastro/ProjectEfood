import styled from 'styled-components'

export const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`