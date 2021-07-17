import { createContext, useState} from 'react';

//새 Context를 만드는 함수 createContext
//고정적이 값만 사용이 가능하다.
// const ColorContext = createContext({color : "black"});

//기본값설정
const ColorContext = createContext({
    state : {color : 'black', subcolor : 'red'},

    actions : {
        setColor : () => {},
        setSubcolor : () => {}
    }
});

const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor , setSubcolor] = useState('red');

    const value = {
        state : {color, subcolor},
        actions : {setColor , setSubcolor}
    };

    return (
        <ColorContext.Provider value = {value}>{children}</ColorContext.Provider>
    )
}

// const ColorConsumer = ColorContext.Consumer와 같은 의미이다.
const {Consumer : ColorConsumer} = ColorContext;

export {ColorProvider, ColorConsumer};

export default ColorContext;