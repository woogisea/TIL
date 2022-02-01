## Context API + Reducer

---

- TodoProvider 함수를 만들어서 App.js에서 전체 포괄
- state, dispatch , nextId 두개의 Context를 만들어서 따로 따로 사용할 수 있게
-

```JS
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdContext.Provider value={nextId}>
          {children}
        </TodoIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
```

## <br>

---

- 커스텀 훅을 만들어서 useContext 활용

```JS
export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoId() {
  return useContext(TodoIdContext);
}



//useContext 활용
const dispatch  = useContext(TodoDispatchContext);

//커스텀 훅 활용
const dispatch = useTodoDispatch();
```
