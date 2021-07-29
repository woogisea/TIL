import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTempleteBlock = styled.div`
    background: ${palette.gray[2]};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    width: 360px;
    background: white;
    box-shadow : 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    border-radius: 2px;

    .logo-area {
       padding-bottom: 2rem;
       text-align: center;
       font-weight: bold;
       letter-spacing: 2px;
    }
`;

const AuthTemplete = ({ children }) => {
    return (
        <AuthTempleteBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to = "/">REACTORS</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTempleteBlock>
    );
};

export default AuthTemplete;