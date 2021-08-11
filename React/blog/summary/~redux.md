## #1chap

<br>

>### react-router-dom
- 주요 페이지 라우터 적용
- PostListPage의 path 배열을 통해서 한 라우트 컴포넌트에 여러개의 경로를 쉽게 설정 가능

<br>

>### components/ common
- 여러 다른 컴포넌트에서 재사용 하기 쉽게 기본 틀을 만들어 둔다.
- 재사용시 import를 통해서 사용 가능
- Button 예시의 props를 통해서 쉽게 커스텀 가능
- 코드가 간략해 진다

<br>

>### props 전달
- registerPage 와 loginPage에서 각각의 type을 자식 컴포넌트로 전달
- 자식 컴포넌트에서는 props에 맞는 form을 변경
- 하나의 form으로 register,login 구현

<br>

>### redux 상태관리
- form의 input값 관리, 초기값 관리
- 어떤 form 인지(login, register), 어떤 값을 바꿀건지(username, password, passwordConfirm), 실제바꾸려는 값
- 각 input의 name으로 key 구분