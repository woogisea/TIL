import React from 'react';
import styles from './CSSModule.module.css'

const CSSModule = () => {
    return (
        <div className = {`${styles.wrapper} ${styles.inverted}`}>
            {/* 전역적으로 사용되는 경우(:global)이면 그냥 문자열로 넣어주면 된다*/}
            안녕하세요, 저는 <span className = "something">CSS Module!</span>
        </div>
    );
}; 

export default CSSModule;