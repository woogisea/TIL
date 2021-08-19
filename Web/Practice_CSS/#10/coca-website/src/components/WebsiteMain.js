import React from 'react';
import styled from 'styled-components';

const WebsiteMainBlock = styled.div`
    margin : 5rem 5rem 0 0;
`;
const WebsiteMain = ({children}) => {
    return (
        <WebsiteMainBlock>
            {children}
        </WebsiteMainBlock>
    );
};

export default WebsiteMain;