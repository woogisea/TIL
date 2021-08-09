import React from 'react';
import styled from 'styled-components';
import thumb1 from '../img/thumb1.png';
import thumb2 from '../img/thumb2.png';
import thumb3 from '../img/thumb3.png';

const WebsiteFooterBlock = styled.div`
    width: 100%;
    text-align : center;
`;

const ImgBlock = styled.img`
    width: 70px;
    margin-right: 2rem;
    transition: 0.5s;

    &:hover {
        width: 80px;
    }
`;
const WebsiteFooter = () => {
    return (
        <WebsiteFooterBlock>
            <ImgBlock src = {thumb1} />
            <ImgBlock src = {thumb2} />
            <ImgBlock src = {thumb3} />
        </WebsiteFooterBlock>
    );
};

export default WebsiteFooter;