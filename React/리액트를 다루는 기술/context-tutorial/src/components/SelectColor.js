import React from 'react';
import { ColorConsumer } from '../contexts/color'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColor = () => {
    return (
        <div>
            <h2>색상을 선택하세요</h2>
            <ColorConsumer>
                {/*객체 비구조화 할당 문법 사용*/}
                {( {actions })=>(
                    <div style = { {display : 'flex'}}>
                        {colors.map(color => (
                            <div key = {color} style = {{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }} onClick = {() => actions.setColor(color)} />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColor;