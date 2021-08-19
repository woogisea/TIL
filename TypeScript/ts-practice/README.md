# TypeScript

### 타입스크립트 설정파일 생성
```
$ yarn global add typescript

tsc --init


//*.ts 확장자를 사용
```

###  기본 타입
특정 변수 또는 상수의 타입을 지정 가능, 사전에 지정한 타입이 아닌 값이 설정 될 때 에러 발생
```js
    const message : string = 'hello world';  //message가 문자열임을 표기
    console.log(message);


    let count = 0; // 숫자
    count += 1;
    count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

    const message: string = 'hello world'; // 문자열

    const done: boolean = true; // 불리언 값

    const numbers: number[] = [1, 2, 3]; // 숫자 배열
    const messages: string[] = ['hello', 'world']; // 문자열 배열

    messages.push(1); // 숫자 넣으려고 하면.. 안된다!,, message는 문자배열 

    let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
    let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

    let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
    color = 'yellow';
    color = 'green'; // 에러 발생!
```
<br>

### 함수에서의 타입
```js
    function sum(x: number, y: number): number {
    return x + y;
    //return null 일 경우에는 오류
    }
    sum(1, 2);
    //함수의 파라미터가 숫자임을 표기, return 값또한 숫자임을 표기

    function returnNothing():void {
        console.log('return Nothing');
    }
    sum(1, 2);
    // 반환하지 않는다면 void
```

<br>

### interface, type
클래스 또는 객체를 위한 타입을 지정 할 때 사용된다. <br>
보통 클래스에서는 interface, 일반 객체 타입인 경우에는 type, 일관성 있게 사용하는 것이 좋음
```js

    //Person과 Developer의 형태가 유사하기 때문에 extends 키워드로 Person 상속
    interface Person {
        name: string;
        age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
    }
    interface Developer extends Person {
        skills : string[];
    }

    const person: Person = {
        name: '김사람',
        age: 20
    };

    const expert: Developer = {
        name: '김개발',
        skills: ['javascript', 'react']
    };

    const people: Person[] = [person, expert];

////////////////////////////////////////////////////////////////////////

    type Person = {
        name: string;
        age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
    };

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
    type Developer = Person & {
        skills: string[];
    };

    const person: Person = {
        name: '김사람'
    };

    const expert: Developer = {
        name: '김개발',
        skills: ['javascript', 'react']
    };

    type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
    const people: People = [person, expert];

    type Color = 'red' | 'orange' | 'yellow';
    const color: Color = 'red';
    const colors: Color[] = ['red', 'orange'];
```

<br>

### Generics
여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에 사용
```js
    //merge 함수의 파라미터로 어떤 타입이 올지 모르는 경우
    function merge<A, B>(a: A, b: B): A & B {
    return {
            ...a,
            ...b
        };
    }

const merged = merge({ foo: 1 }, { bar: 1 });

///// Interface
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c']
};

//// Type
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ['a', 'b', 'c']
};
```