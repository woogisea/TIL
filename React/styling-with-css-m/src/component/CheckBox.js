import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';   //react-icons 라이브러리 사용
import styles from  './CheckBox.module.css';    //CSS Module 사용
// 클래스 이름 짓는 규칙을 정하기 힘들거나 번거로울 때 사용하면 편하다.

function CheckBox({children, checked, ...rest})
{
    return(
        <div className = {styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className = {styles.icon}>{checked ? <MdCheckBox className = {styles.checked} /> :  <MdCheckBoxOutlineBlank />}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}
export default CheckBox;