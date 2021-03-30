## Operator(연산자)
---
### String concatenation
문자열과 문자열을 합해서 새로운 문자열을 생성
```JS
console.log('hello' + 'world');
console.log('1' + 2);               //숫자가 문자열로 변환
console.log(`string literals: 1 + 2 = ${ 1 + 2 }`);       //"`"기호 활용해서 string literals(줄바꿈 + 기호 인식 가능) 만들기
```
<br>

### Numeric operators
숫자 연산(+, - , /, *)

<br>

### Increment and decrement operators
```JS
const num = 1;
const preIncrement = ++num;     //num값 증가후 변수에 저장
const postIncrement = num++;    //변수에 저장 후 num값 증가
                                //decrement 또한 동일
```
<br>

### Assignment operator
할당
```JS
let x = 1;
let y = 2;

x += y;
x -= y;
x *= y;
x /= y;
```
<br>

### Numeric operators
비교

<br>

### Logical operator
|| (or) , &&(and), !(not)
```JS
const value = false;
const value2 = 1 < 2;

//or는 처음으로 true가 나오면 멈춘다.
//연산을 많이 하는 함수 등을 제일 앞에서 조건을 탐색하면 시간이 오래걸려서 제일 뒤에 배치하는게 효율적
console.log(`or: ${value || value2 || <true를 return 하는 함수>}`); 

console.log(`and: ${value && value2 && <true를 return 하는 함수>}`);

console.log(!value);       // 반환값 반대로
```
<br>

### Equality
```JS
const stringNum = 5;
const numberNum = 5;

// "==" 타입을 신경쓰지 않고 검사
console.log(stringNum == numberNum);    //true

// "===" 타입을 신경쓰면서 검사
console.log(stringNum === numberNum);    //false
```
<br>

### Conditional operator ( :if)
```JS
const name = 'Jaewook'

if(name === 'Jaewook') {
    console.log('Hello');
}
else if(name === 'none') {
    console.log('none name');
}
else {
    console.log('who?');
}
```

<br>

### Ternary operator ( :?)
간단하게 if문 사용하기
```JS
const name = 'Jaewook'

console.log(name === 'Jaewook' ? 'yes' : 'no');
```

<br>

### Switch statement
else if 문이 반복되는 상황일 경우 사용해볼수 있다. 가독성 향상
```JS
const name = 'Jaewook'
switch (name) {
    case 'Jaewook':
        console.log('true');
        break;
    case 'none':
    case 'who?':
        console.log('false');
        break;
}
```

<br>

### Loops
while, do-while, for <br>
break : loop 상황을 완전히 끝낸다.
continue :  skip 하고 다음 단계로 넘어간다.
```JS
let i = 3;
while(i > 0) {
    console.log(`white: ${i}`);
    i--;
}                                 // 3, 2, 1

do {
    console.log(`white: ${i}`);
    i--;
}while(i > 0);                    //3, 2, 1, 0   블럭을 먼저 실행

for(i = 3; i>0; i--) {
    console.log(`for: ${i}`);     //3, 2, 1
}
```