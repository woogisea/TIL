import React, {useState,createContext } from 'react';

const todos = createContext({
    state : [
        {
            id : 1,
            text : '안녕하세요',
            checked : true
        },
        {
            id : 2,
            text : '안녕하세요2',
            checked : false
        }
    ],

    actions : {
        onToggle : id => {}
    }
});

const TodoProvider = ({ children }) => {
    const [todos,setTodos] = useState('');

    const value = {
        state : todos,
        actions : {
            onToggle : id => {
                setTodos(
                    todos.map(todo => todo.id === id ? { ...todo, checked : !todo.checked} : todo)
                )
            }
        }
    }

    return (
        <todos.Provider value = {value}>{children}</todos.Provider>
    );
}

const {Consumer : TodoConsumer} = todos;

export {TodoProvider, TodoConsumer};

export default todos;