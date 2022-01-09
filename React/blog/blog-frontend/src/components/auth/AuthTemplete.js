import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTempleteBlock = styled.div`
  background-color: ${palette.gray[2]};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const WhiteBox = styled.div`
  .logo-area {
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  width: 360px;
  padding: 2rem;
  background-color: white;
  border-radius: 2px;
`;
const AuthTemplete = ({ children }) => {
  return (
    <AuthTempleteBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTempleteBlock>
  );
};

export default AuthTemplete;
