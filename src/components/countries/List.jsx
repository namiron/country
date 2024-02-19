import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0px;

  display: grid;
  grid-template-column: repeat(1, 1fr);
  align-items: baseline;
  gap: 20px;
  
  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: baseline;
    gap: 20px;
    padding: 20px 0; 
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
    gap: 40px;
  }
`;


const List = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default List;