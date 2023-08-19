import React, { useState } from "react";
import styled from "styled-components";
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
height: 80px;
background-color: #36332b;
`;

const Wrapper = styled.div`
padding: 5px 20px;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
background-color: white;
border-radius: 5px;
justify-content: space-between;
`;

const Input = styled.input`
border: none;
width: 90%;
`;

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.h1`
font-weight: bold;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = event => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
            <Logo>IMDb</Logo>
        </Left>
        <Center>
            <SearchContainer>
            <Input type="text"
              placeholder="Search by title, cast, or director..."
              value={searchQuery}
              onChange={handleSearch} />
            <Search style={{ color: "gray", fontSize: 16 , width: "10%" }} />
            </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>Movies
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/movie/watchlater`} style={{ textDecoration: 'none', color: 'white' }}>Watch list
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/movie/starred`} style={{ textDecoration: 'none', color: 'white' }}>Starred Movies
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
