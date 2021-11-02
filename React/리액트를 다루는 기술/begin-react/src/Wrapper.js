import React from 'react';

//컴포넌트 태그 사이에 넣은 값을 조회한다.
//App 에서 Wrapper 안에 Hello 두개가 들어가 있다.
function Wrapper({children}) {
    const style = {
        border : '2px solid black',
        padding : '16px',
    };
    return (
        <div style = {style}>
            {children}
        </div>
    );
}

export default Wrapper;