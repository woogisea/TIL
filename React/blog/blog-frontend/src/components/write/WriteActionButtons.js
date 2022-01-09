import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const WriteActionButtons = () => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan>포스트 등록</StyledButton>
      <StyledButton>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
