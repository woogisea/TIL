import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

//회원가입, 로그인 레이아웃

const AuthTempleteBox = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${palette.gray[2]};

    //내부를 중앙으로 정렬
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    background-color: white;
    width: 360px;
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    border-radius: 2px;

    .logo-area {
        font-weight: bold;
        letter-spacing: 2px;
        padding-bottom: 2rem;
        text-align: center;
    }
`;
const AuthTemplete = ({ children }) => {
    return (
        <AuthTempleteBox>
            <WhiteBox>
                <div className="logo-area">
                    {/*링크를 통해서 처음(PostList)으로 돌아갈 수 있게*/}
                    <Link to = '/'>Reactors</Link>
                </div>
                {children}
            </WhiteBox>
        </AuthTempleteBox>
    );
};

export default AuthTemplete;