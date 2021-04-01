## Object
---
Object를 사용하여 간편하게 데이터를 관리할 수 있다. 

<br>

### Literals and properties
object = { key : value };
```JS 
//Object 생성 방법들..
const obj1 = {};
const obj2 = new Object();

ex ) const jaewook = {name = 'Jaewook'};

     jaewook.hasJob = true ;    // 추가(동적으로 할 수 있지만 나중에 유지보수에 힘들다.)
     delete jaewook.hasJob;     // 삭제
```

<br>

### Computed properties
computed properties는 동적으로 키를 받아올 때 사용
```JS
console.log(jaewook.name);        //Jaewook
console.log(jaewook['name']);     //Jaewook, 항상 key는 string으로 지정해야 한다. (computed properties)

function printValue(obj,key) {
    console.log(obj[key]);
}
printValue(jaewook, 'name');       //동적으로 key를 받아오는 예시
```

<br>

### Constructor Function
```JS
const person = new Person('Jaewook',25);
//object를 생성하는 함수들은 첫문자를 대문자로 한다.
function Person(name,age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this
}
```

<br>

### in operator 
키가 있는지 없는지 확인하는 키워드
```JS
console.log('name' in jaewook);      //true
console.log('random' in jaewook);    //false
```

<br>

### for..in VS for..of
```JS
for(key in jaewook) {
    console.log(key);
}                          //모든 key들을 받아와서 처리

const array = [1,2,3,4,5];
for(value of array) {
    cnosole.log(value);
}                         //배열, 리스트 등 순차적인 것들에 사용
```

<br>

### cloning
```JS
const user = {name = 'who'};
const user2 = user;
user2.name = 'Jaewook';
console.log(user);          //name = 'Jaewook' (방법1)

const user2 = Object.assign({},user);       //user2 = user

const fruit = {color = 'red'};
const fruit2 = {color = 'blue', size = 'big'};
const mixfruit = Object.assign({},fruit,fruit2);
//뒤에 나올 수록 앞에 동일한 요소가 있다면 덮어씌운다.
console.log(mixfruit.color);            //blue
console.log(mixfruit.size);             //big


```



 