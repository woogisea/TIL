## ~ redux-saga

<br>

>### axios 인스턴스
- API 클라이언트의 공통된 설정을 쉽게 할 수 있다.
- 또한 axios를 사용하지 않을 때 쉽게 클라이언트를 교체 할 수 있다.

<br>

>### loading 리덕스 모듈
- api 요청을 하기위한 모듈
- 로딩이 시작되면 true, 끝나면 false


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