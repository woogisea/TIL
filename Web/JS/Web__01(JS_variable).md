## Data Types + Variable(변수)
---

### Variables  (read/write)
변수를 선언할 수 있는 키워드 : let

```JS
//Global scope (어디에서나 접근 가능)
let globalName = "Jaewook"

//Block scope(블럭 밖에서 안에 있는 변수에 접근 불가)
{
    let name  = "Jaewook";
    name = hello
}
```
<br>

### Constant (read)
선언과 동시에 할당된 이후에 변경 불가능 : const  <br>
변수의 값이 변할 이유가 없다면 const로 작성하는게 좋다.
```JS
const daysInWeek = 7;
const maxNumber = 5;
```
<br>

### Variables types

```JS
const count = 17;
const size = 17.1;          //값에 상관없이 type : number

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;     //특별하게 값이 정해져 있는 number

const char = 'c';
const name = 'Jaewook';
const plusName = 'hello' + name;           //type : String

console.log(`value : &{name} type : &{typeof plusName}`);   
console.log('value: ' + name + 'type:' + typeof plusName);      // `을 사용하면 "+"를 사용하지 않아도 공백이나 문자열이 그대로 출력

const canRead = true;
const  test = 3 < 1;         //boolean

let nothing = null           //null

let x = undefined;          //undefined
```
<br>

### Dynamic typing
변수에 따라서 type이 바뀐다. <br>
타입이 계속 바뀌기 때문에 나중에 혼란이 올 수 있기 때문에 TypeScript 활용
```JS
let text = 'hello';         //String
text = 1;                   //number
text = '7' + 5;             //String
test = '8' / '2';           //number
```




