import React, { createContext, useReducer, useRef, useContext} from 'react';

const initialState = [
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
];
  
  function reducer(state, action) {
    switch (action.type) {
      case 'onInsert':
        return state.concat(action.user);
      
      case 'onToggle' :
        return state.map(todo => (todo.id === action.id ? {...todo, checked : !todo.checked} : todo));

      case 'onRemove' :
        return state.filter(todo => todo.id !== action.id);

      default:
        return state;
    }
  }

  const TodoStateContext = createContext();
  const TodoDispatchContext = createContext();
  const TodoNextIdContext = createContext();

  export function TodoProvider ({ children }) {
      const [state, dispatch] = useReducer(reducer, initialState);
      const nextId = useRef(3);
      return(
        <TodoStateContext.Provider value = {state}>
            <TodoDispatchContext.Provider value = {dispatch}>
                <TodoNextIdContext.Provider value = {nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      );
  }

  export function useTodoStateContext(){
      return useContext(TodoStateContext);
  }

  export function useTodoDispatchContext(){
      return useContext(TodoDispatchContext);
  }

  export function useTodoNextIdContext(){
    return useContext(TodoNextIdContext);
}