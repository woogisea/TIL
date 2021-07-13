import React from 'react';
import './TodoListItem.scss';
import cn from 'classnames';
import  { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md'
 
const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
    
    return (
        <div className = "TodoListItem">
            {/*조건부 스타일 설정*/}
            <div className={cn( 'checkbox', {checked})} onClick = {() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick = {() => onRemove(id)}><MdRemoveCircleOutline /></div>
        </div>
    );
};

//props가 바뀌지 않는다면 렌더링을 방지하는 React.memo
export default React.memo(TodoListItem);