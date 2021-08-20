# TypeScript

### 리액트 컴포넌트 타입스크립트로 작성하기
```
$ yarn create react-app [파일] --template typescript

```
<br>

>컴포넌트에 있어도 되고 없어도 되는 props는 '?' 문자를 사용


>App 단에서 또는 특정 함수를 props를 받아와야 하는 경우에도 다른 props와 선언 방법은 같다.

<br>
<br>

### 타입스크립트로 상태 관리하기

> useState의 경우는 Generics를 사용하지 않아도 알아서 타입을 유추

상태가 null 일 수도 있고 아닐수도 있을 때 사용하면 좋다
```js
    type Information = { name: string; description: string };
    const [info, setInformation] = useState<Information | null>(null);
```
<br>

> 이벤트를 다룰 때 타입 지정

e 객체의 타입을 알기 위해 해당 이벤트에 마우스를 올리면 친절하게 알려준다

