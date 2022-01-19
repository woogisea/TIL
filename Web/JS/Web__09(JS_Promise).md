## Promise

---

콜백 함수 대신에 비동기적 수행 <br>

- state
- Producer , Consumer

```JS
//promise가 만들어지는 순간 바로 함수 실행(자동적으로)
const promise = new Promise((resolve, reject) => {
    //heavy work(network, files)
});

//promise가 정상 수행한 후에 콜백함수에서 전달 된 값이 들어온다.(resolve)
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    //성공,실패와 관련 x
    .finally(() => {
        console.log('finally');
    })
```
