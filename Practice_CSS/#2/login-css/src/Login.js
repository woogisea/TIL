import React from 'react';
import styled from 'styled-components';
import { AiFillLock } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const LoginBox = styled.div`
`;
const MainBox = styled.div`
    width: 280px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;

    span {
        font-size: 2rem;
        border-bottom: 5px solid green;
        font-weight: bold;
    }

    .username {
        margin-top: 2.5rem;
    }

    .username, .password {
        margin-bottom: 1rem;
        border-bottom: 1px solid green;
        display: flex;

        svg {
            padding-right: 0.5rem;
        }
    }

    button {
        width: 100%;
        border : 1px solid green;
        background: none;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        &:hover {
            border: 1px solid cyan;
        }
    }
`;
const StyledInput = styled.input`
    width: 85%;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding-bottom: 0.3rem;
`;
const Login = () => {
    return (
        <LoginBox>
            <MainBox>
                <span>Login</span>
                <form>
                    <div className="username">
                        <BsFillPersonFill /> <StyledInput name = "login" placeholder = "Username" />
                    </div>
                    <div className="password">
                        <AiFillLock /> <StyledInput type = "password" name = "password" placeholder = "Password" />
                    </div>
                    <button>Sign in</button>
                </form>
            </MainBox>
        </LoginBox>
    );
};

export default Login;