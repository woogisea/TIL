import React from 'react';
import styled from 'styled-components';

//CSS Selector를 사용하여 스타일링, 조건부 스타일링이 필요가 없고 기능적으로 크게 중요하지 않을 때
const TodoHeadBlock = styled.div`
    padding-top :48px;
    padding-right : 32px;
    padding-left : 32px;
    padding-bottom : 24px;
    border-bottom : 1px solid #e9ecef;

    h1 {
        margin : 0;
        font-size : 36px;
        font-weight : bold;
    }

    .day {
        font-size : 21px;
        margin-top : 4px;
        color : #868e96;
    }

    .task-list {
        color : #20c997;
        margin-top : 40px;
    }
`;

function TodoHead()
{
    return(
        <TodoHeadBlock>
        <h1>2021년5월14일</h1>
        <div className = "day">수요일</div>
        <div className = "task-list">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
}
export default TodoHead;