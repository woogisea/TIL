## Function
---
input과 output 설정이 중요 + function의 이름을 잘 설정해야한다. (어떤일을 하는지 예상이 가능하게)

<br>

### Function declaration
function name(param1, param2) { body ... return; } <br>
하나의 함수는 하나의 일만 하도록 설정 <br>
```JS
function printHello(message) {
    console.log(message);
}
printHello('Hello');
```
<br>

### Function expression
함수를 변수에 할당
```JS
const print = function() {
    console.log('Hi');
}
printf();                      //Hi
const subPrint = print;
subPrint();                    //Hi
```

<br>

### Parameters
primitive(Number, String, Booleans, null, undefined)은 value가 그대로 전달  <br>
object는 reference가 그대로 전달 <br>
```JS
function changeName(obj) {
    object.name = 'Jaewook';
}
const jaewook = {name : 'who'};
changeName(jaewook);
console.log(jaewook);                 //object 함수 인자 예제
```

<br>

### Default parameter
```JS
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');                    //param을 전달하지 않았을 때 default 값을 정해논다 
                                      //"Hi by unknown"
```

<br>

### Rest parameter
배열 형태로 전달
```JS
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);     
    }                                           //배열 참조의 간략 버전(변수 arg로 배열원소를 하나씩 참조)                  

    printAll('jaewook', 'Front', 'Dev');        //배열 형태로 인자 전달
}
```

<br>

### Local scope
전역변수, 지역변수 개념과 동일

<br>

### Return
함수에서의 값 반환

<br>

### Early Return, early exit
```JS
//Bad
function upgradeUser(user) {
    if(user.point > 10) {
        //logic
    }                           //블럭안에서 많은 logic이 있으면 가독성이 딸어진다.
}

//Good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }  
    logic....                         //조건이 안맞는 경우에 return + 함수를 빨리 종료
}
```

<br>

### Callback
```JS 
function random (answer, printYes, printNo) {
    if(answer === 'Jaewook') {
        printYes();          //함수(1)
    }
    else {
        printNo();           //함수(2)
    }
}

const printYes = function () {
    console.log('Yes');
}     

const printNo = function () {
    console.log('No');
}

random('who', printYes, printNo);                     //No
random('Jaewook', printYes, printNo);                 //Yes  

          //callback function가 param로 전달되어서  조건에 따라서 다른 callback 함수를 호출하게 된다.
```

<br>

### Arrow function
이름이 없는 함수 간단하게 호출하기.
```JS
const simplePrint = function() {
    console.log('Simple print');
}
//////////////////
const simplePrint = () => console.log('Simple print');
const add = (a,b) => {
    .....
    .....
    return a+b;
};                            //블럭안에 식이 많을 경우에는 return를 표기해줘야한다.
```




