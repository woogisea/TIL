## Properties
---
어떠한 값을 컴포넌트에게 전달해야 할때 사용한다.
<br>

```JS
function App() {
    return (
        <Hello name = "react" color = "red" />
    );
}

function Hello(props) {
    return <div style = {{color : props.color}}>안녕하세요 {props.name} </div>
}
```
좀더 간결하게 비구조화 할당을 이용해보자
```JS
function Hello({color, name}) {
    return <div style = {{color}}>안녕하세요 {name} </div>
}
```