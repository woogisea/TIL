import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBoxWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .inputWrapper {
        input[type="text"] {
            display: none;
        }

        svg {
            width: 40px;
            background-color: #130f40;
            padding: 1rem;
            border-radius: 30px;
            color: #f0932b; 
        }

        &:hover {
            width: 250px;
            background-color: #130f40;
            border-radius: 25px;
            padding: 0.5rem;
            display: flex;

            svg {
                width: 25px;
                height: 25px;
                background-color: white;
                border-radius: 20px;
                padding: 5px;
                color: #f0932b;
            }

            input[type="text"] {
                display: flex;
                flex: 1;
                border: none;
                background: none;
                padding-left: 1rem;
                outline: none;
                color: white;
            }
        }
    }
`;

const SearchBox = () => {
    return (
        <SearchBoxWrapper>
            <div className="inputWrapper">
                <input type="text" name = "" placeholder = "Type to search" />
                <AiOutlineSearch />
            </div>
        </SearchBoxWrapper>
    );
};

export default SearchBox;