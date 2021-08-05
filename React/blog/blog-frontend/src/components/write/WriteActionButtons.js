import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
    margin-top: 0.5rem;
`;

const StyledButton = styled(Button)`
    &+&{
        margin-left: 0.5rem;
    }
`;
const WriteActionButtons = ({ onPublish, onCancle}) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton cyan onClick = {onPublish}>포스트 등록</StyledButton>
            <StyledButton onClick = {onCancle}>취소</StyledButton>
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;