## JSON
---
JSON으로 변환하게 되면 data들이 string으로 변환된다.  <br>
JSON에서 다시 obj로 변환하게 되면 obj에 있는 data의 type은 string으로 유지된다.

### Object to JSON
```JS
let json = JSON.stringify(true);     //true

json = JSON.stringify(['apple', 'banana']);     //["apple","banana"]

//object 생성
const rabbit = {
    name : 'tori';
    color : 'white';
    size : null;
    bitrhDate: new Data(),
    //함수 jump
    jump(){
        console.log(`${name} can jump!`);
    },
};    
json = JSON.stringify(rabbit);                //{"name":"tori", "color" : "white", "size" : null....} + Date 또한 문자열로 변환

                     //함수는 object에 있는 data가 아니기 때문에 json에서 제외된다.

json = JSON.stringify(rabbit, ["name"]);     //{"name":"tori"}
                                             //원하는 것만 골라서 json으로 변환

```

<br>

### JSON to Object
JSON(string으로 변환된)으로 부터 다시 object를 만들었기 때문에 JSON으로 변환할때 포함되지 않은 함수 같은 부분은 빠지게 된다.  
```JS
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);            //object로 변환

console.log(rabbit.birthDate.getDate());      //error

const obj = JSON.parse((json, (key,value) => {
    return key === 'birthDate' ? new Date(Value) : value;
}));                                   //string으로 변환되어 있던 date를 callback 함수를 이용해서 data 재 할당.

console.log(rabbit.birthDate.getDate());     //정상 date 출력
```



