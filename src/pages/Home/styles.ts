import styled from 'styled-components'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px 0;
  padding: 0;
  list-style: none;

  @media (max-width: 1024px) {
    column-gap: 32px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`