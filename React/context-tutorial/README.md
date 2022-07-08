# Context API

## 전역 상태 관리 방법

- createContext로 새 Context 만들기
- Consumer를 사용해서 Context의 값 가져오기

## 고정 Context

```js
<ColorContext.Consumer>
  {(value) => (
    <div
      style={{ width: '64px', height: '64px', background: value.color }}
    ></div>
  )}
</ColorContext.Consumer>
```

- Provider를 사용해서 Context의 값 변경하기
  - value값을 명시해주는것이 중요함!

```js
<ColorContext.Provider value={{ color: 'red' }}>
  <ColorBox />
</ColorContext.Provider>
```

## Consumer 대신 Hook 사용하기

함수형에서만 사용가능하다 <br>
Consumer를 사용하지 않고 간편하게 Context값을 조회할 수 있다.

```js
const { state } = useContext(ColorContext);
```
