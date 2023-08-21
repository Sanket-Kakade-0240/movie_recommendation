import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components";


const Container = styled.div`
padding: 1rem;
`;
const StarredPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Starred movies</h1>
        
      </Container>
    </div>
  )
}

export default StarredPage