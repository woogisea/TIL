import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`

    ${props =>
        props.hadMarginTop && 
        css`
            margin-top: 1rem;
    `};
    color: ${palette.gray[6]};

    span + span::before {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        color: ${palette.gray[5]};
        content: '\\B7';
}`; 
const SubInfo = ({ username, publishedDate, hadMarginTop }) => {
    return (
        <SubInfoBlock hadMarginTop = {hadMarginTop}>
            <span>
                <b>
                    <Link to = {`/@${username}`}>{username}</Link>
                </b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
};

export default SubInfo;