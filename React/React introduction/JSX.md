## JSX
___
생김새를 정의할 때 사용하는 문법이다.
<br>

## 주의사항
1. 태그를 열었으면 꼭 닫는다.
2. 태그와 태그 사이에 내용이 들어가지 않을 때에는 self Closing을 사용한다.
   ```JS
   function App() {
       return (
           <div>
              <Hello />
              <Hello />
              <input />
              <br />
           </div>
       );
   }
   ```
3. 두개 이상의 태그는 꼭 하나의 태그로 감싸져야 한다.
      ```JS
      ///오류
   function App() {
       return (
           <Hello />
           <div>안녕하세요</div>   
       );
   }

   //정정
   function App() {
       return (
           <div>
              <Hello />
              <div>안녕하세요</div> 
           </div>  
       );
   }
   //하나의 div로 감싸기 애매한 경우, fragment를 사용한다.
    function App() {
       return (
           <>
              <Hello />
              <div>안녕하세요</div> 
           </>  
       );
   }
   ```
   4.JSX 내부에 자바스크립트 값 이용하기
   ```JS
   ///{ }사용
   function App() {
       const name = 'react';
       return (
           <>
            <Hello />
            <div>{name}</div>
           </>
       );
   }

   ///style 사용
   function App() {
       const name = 'react';
       const style = {
           backgroundColor : 'black',
           color : 'aqua',
           fontSize : 24,
           padding : '1rem'
       }
       return (
           <>
            <Hello />
            <div style = {style}>{name}</div>
           </>
       );
   }

   //외부 css 사용 할때는 className 이용
    function App() {
       const name = 'react';
       const style = {
           backgroundColor : 'black',
           color : 'aqua',
           fontSize : 24,
           padding : '1rem'
       }
       return (
           <>
            <Hello />
            <div style = {style}>{name}</div>
            <div className = "gray-box"></div>
           </>
       );
   }
   ```