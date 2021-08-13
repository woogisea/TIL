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

>### createRequestSaga 유틸 함수
- login,register API의 중복되는 코드를 함수로 만듬.
- login(성공,실패), register(성공,실패)에 관한 부분만 처리해 주면 된다.
<br>

>### 회원가입, 로그인
- username, password를 파라미터로 넣어서 액션을 디스패치
- 결과는 auth,authError로 확인

>### check -> user
- check 후 성공 하면 user에 로그인 정보를 저장
- 로그인 상태를 user에서 참조

>### localStorage
- 회원가입 및 로그인을 하면 사용자 정보(user)를 localStorage에 저장
- 새로고침해도 로그인 상태를 유지하기 위해서 리액트 앱이 브라우저에서 처음 랜더링 될 때 localStorage안에서 값을 불러와 리덕스 스토어안에 넣도록 구현


>### 로그아웃
  - localStorage에서 user 삭제



