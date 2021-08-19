import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
 
const NetflixHeaderBlock = styled.div`
    img {
        width: 200px;
        height: 50px;
        padding-left: 4.5rem;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    width: 100%;

    @media (max-width : 991px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const NavBlock = styled.ul`
    li {
        color: white;
        padding-right: 1rem;
        font-size: 1.125rem;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }
    display: flex;
    list-style: none;
`;
const SearchBlock = styled.div`
    border: 1px solid white;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-right: 2.5rem;

    svg {
        padding : 0 0.5rem;
        border-right: 1px solid white;
        cursor: pointer; 
    }
    @media (max-width : 991px) {
        margin-left: 5rem ;
    }
`;
const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 250px;
    color : white;
    padding: 0.3rem;
    margin-left: 0.5rem;
    background: none;

    &::placeholder {
        color: white;
    }
`;
const NetflixHeader = () => {
    return (
            <NetflixHeaderBlock>
                <img src={logo} alt=""/>
                <NavBlock>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                </NavBlock>
                <SearchBlock>
                    <BsSearch /><StyledInput type = "text" placeholder = "Search" />
                </SearchBlock>
            </NetflixHeaderBlock>
    );
};

export default NetflixHeader;