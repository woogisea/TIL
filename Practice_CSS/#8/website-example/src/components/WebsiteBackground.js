import React from 'react';
import styled from 'styled-components';

const WebsiteBackgroundBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: green;
    width: 100%;
    height: 100%;
`;

const WebsiteBackground = ( {children}) => {
    return (
        <WebsiteBackgroundBlock> {children} </WebsiteBackgroundBlock>
    );
};

export default WebsiteBackground;