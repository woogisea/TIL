## useState
---
useState 함수를 통해 동적인 값을 관리할 수 있다.

```JS
import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(number + 1);
    }

    const onDecrease = () => {
        setNumber(number - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    );
}
export default Counter;
```

상태의 기본값을 파라미터로 넣어서 호출해준다.