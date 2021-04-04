## 다양한 array-api들
---
>api들은 서로 묶어서 작성이 가능하다. 

 <br>

### join
array -> string  <br>
join('구분자')   <구분자는 생략 가능>
```JS
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join();             //apple,banana,orange
const result = fruits.join('&&');        //apple&&banana&&orange
```
<br>

### split
string -> array  <br>
split('구분자', 'limit')   <limit은 생략 가능>
```JS
const fruits = 'apple, banana, orange';
const result = fruits.split(',');             //['apple','banana','orange']
const result = fruits.splice(',', 2);        //['apple', 'banana']
```

<br>

### reverse
배열 안에 있는 원소 순서를 거꾸로 만든다. <br>
원래 기존에 있던 배열이 reverse 되서 return
```JS
const array = [1,2,3,4,5]
const result = array.reverse();   //[5,4,3,2,1]
```
<br>

### splice, slice
splice = 기존 배열 자체가 변형이 된다.  <br>
slice = 기존 배열의 변형이 없다.  배열에서 원하는 부분만 return 받고 싶을 때 사용<br>
splice(start, end)   (마지막 end는 포함 x (end-1까지))    <br>
```JS
const array = [1,2,3,4,5]
const result = array.splice(0,2);   //삭제된 [1,2]가 return
cnosole.log(array);                 //기존 배열 [3,4,5]

const result = array.slice(2,5)     //[3,4,5]
```
<br>

### splice, slice
splice = 기존 배열 자체가 변형이 된다.  <br>
slice = 기존 배열의 변형이 없다.  배열에서 원하는 부분만 return 받고 싶을 때 사용<br>
splice(start, end)   (마지막 end는 포함 x (end-1까지))    <br>
```JS
const array = [1,2,3,4,5]
const result = array.splice(0,2);   //삭제된 [1,2]가 return
cnosole.log(array);                 //기존 배열 [3,4,5]

const result = array.slice(2,5)     //[3,4,5]
```

<br>

```JS
class student {
    constuctor(name, age, enrolled,  score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]
```

### find
콜백 함수 필수  <br>
처음 true가 나온 값을 return
```JS
const.result = student.find((student) => student.score === 90);              // 'C', 30, false, 90
```

<br>

### filter
```JS
const result = student.filter((student) => student.enrolled);
                //'A', 29, true, 45
                //'C', 30, true, 90
                //'E', 18, true, 88
```

<br>

### map
콜백함수에 따라서 새로운 배열 원소의 값으로 mapping
```JS
const result = student.map(((student) => student.score);
                    // [45, 80, 90, 66, 88]
```

<br>

### some
조건에 따라서 true,false 반환
```JS
const result = student.some((student) => student.score < 50 );  //true

const result = student.every((student) => student.score < 50);  //false  
//every = 모든 배열의 원소가 조건에 만족해야지만 true, 아니면 false
```

<br>

### sort
정렬
```JS
 const num = [2,1,4,10,3];
 //오름차순
 num.sort((a,b) => a - b);      //1,2,3,4,10

 //내림차순
 num.sort((a,b) => b - a);      //10,4,3,2,1
 ``` 