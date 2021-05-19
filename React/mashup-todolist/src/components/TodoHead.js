import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../TodoContext';

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
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year : 'numeric',
        month : 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday : 'long'});
    return(
        <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className = "day">{dayName}</div>
        <div className = "task-list">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}
export default TodoHead;