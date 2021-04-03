## Array(배열)
---
### Declaration(배열 선언)
```JS
const arr1 = new Array();       //방법 1
const arr2 = [1,2];             //방법 2
```

<br>

### Index position
Index 가 0부터 시작한다.
```JS
const fruit = ['apple', 'banana'];
console.log(fruit.length);          // 2 
console.log(fruit[0]);              // apple
console.log(fruit[1]);              // banana
```

<br>

### Looping over an array
```JS
//방법 1
for(let i = 0; i <= fruit.length; i++) {
    console.log(fruit[i]);
}                                  // apple, banana

//방법 2
for(let f of fruit) {
    console.log(f)
}                                 // apple, banana

//방법3
//배열안에 들어있는 value 들마다 자신이 전달한 함수 출력
 fruit.forEach((f) => console.log(f));   // apple, banana
 ```

 <br>

### Add, delete, copy
shift와 unshift는 속도가 느리다. <br>
앞에서 부터 데이터 이동을 하려면 기존에 있던 데이터의 이동이 필요하기 때문이다. <br>
```JS
//push = add
//뒤에서 부터 추가
fruit.push('orange');
console.log(fruit);      // apple, banana, orange

//unshift
//앞에서 부터 추가
fruit.unshift('watermelon');
console.log(fruit);     //watermelon, apple, banana, orange

//pop = delete
//뒤에서 부터 삭제
fruit.pop();
console.log(fruit);     //watermelon, apple, banana

//shift
//앞에서 부터 삭제
fruit.shift();
console.log(fruit);    //apple, banana

//delete
//지우기 and 지운 자리에 새로운 데이터 추가
fruit.push('watermelon', 'lemon');
fruit.splice(1);       //apple
fruit.splice(1,1);     //apple, watermelon, lemon
fruit.splice(1,1,'orange')   //apple, orange, lemon

//combine
//기존 배열에 새로운 배열을 합치기.
const fruit2 = ['strawberry'];
const newFruit  = fruit.concat(fruit2);
```

<br>

### Searching
```JS
배열.indexOf('속성');   //속성의 index값 반환, 속성이 없으면 -1 반환

배열.includes('속성');  //속성이 배열에 있으면 true, 아니면 false

배열.lastIndexOf('속성') //배열의 같은 속성이 2개 이상인 경우 가장 마지막에 있는 속성의 index값을 반환
```

