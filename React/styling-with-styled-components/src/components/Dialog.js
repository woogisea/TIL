import React from 'react';
import styled, {keyframes} from 'styled-components';
import Button from './Button';

//트랜지션 효과 사용
const fadeIn = keyframes`
    from {
        opacity : 0
    }
    to {
        opacity : 1
    }
`;

const slideUp = keyframes`
    from {
        transform : translateY(200px);
    }
    to {
        transform : translateY(0px);
    }
`;

const DarkBackground = styled.div`
    position : fixed;
    left : 0;
    top : 0;
    width : 100%;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    background : rgba(0,0,0,0.8);

    animation-duration : 0.25s;
    animation-timig-function : ease-out;
    animation-name : ${fadeIn};
    animation-fill-mode : forwards;
`;

const DialogBlock = styled.div`
    width : 320px;
    padding : 1.5rem;
    background : white;
    border-radius : 2px;
    h3 { 
        margin : 0;
        font-size : 1.5rem;
    }
    p {
        font-size : 1.125rem;
    }

    animation-duration : 0.25s;
    animation-timig-function : ease-out;
    animation-name : ${slideUp};
    animation-fill-mode : forwards;
`;

const ButtonGroup = styled.div`
    margin-top : 3rem;
    display : flex;
    justify-content : flex-end;
`;

//기존에 있던 Button을 대체(컴포넌트의 스타일을 덮어쓰는 방법)
const ShortMarginButton = styled(Button)`
    & + & {
        margin-left : 0.5rem;
    }
`;

function Dialog({children, title, confirmText, cancelText, onConfirm, onCancle, visible}) 
{
    //visible이 false이면 dialog가 안보이게
    if(!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color = "gray" onClick = {onConfirm}>{confirmText}</ShortMarginButton>
                    <ShortMarginButton color = "pink" onClick = {onCancle}>{cancelText}</ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

export default Dialog;