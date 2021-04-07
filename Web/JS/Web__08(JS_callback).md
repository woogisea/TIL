## Callback
---

### Synchronous callback(동기적)
```JS
console.log('1');
setTimeout( () => console.log('2'),1000));
console.log('3');

function printImmediately(print) {
    print();
}
printImmediately( () => console.log('hello')); 
             //1(동기적), 3(동기적), hello(동기적), 2(비동기적)
             //함수도 hosting이 되므로 함수 선언이 제일 위로 올라가게 된다.
```

<br>

### Asynchronous callback(비동기적)
```JS
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay( () => console.log('async callback'), 2000));
                //1(동기적), 3(동기적), hello(동기적), 2(비동기적), async callback(비동기적)
```

<br>

### 최악의 callback
가독성 최악 <br>

```JS
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        //id와 password 가 일치한다면 onSuccess 콜백
        setTimeout( () => {
            if(
                (id === 'Jaewook' && password === 'hello')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError) {
        //사용자가 Jaewook이면 onSuccess 콜백
        setTimeout( () => {
            if(user === 'Jaewok') {
                onSuccess({ name : 'Jaewook', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
    },2000);
}

const userStorage = new UserStorage();
const id = prompt('enter your name');
const password = prompt('enter your password');
userStorage.loginUser (
    id,
    password,
    //일치
    user => {
        userStorage.getRoles (
            user,
            //getRoles 에서도 일치
            userwithRole => {
                alert(
                    `Hello ${userwithRole.name}, you have a ${userwithRole.role}`
                );
            },
            error => {
                console.log('error');
            }
        );
    },
    error => {
        console.log('error');
    }
);
```