## ~ redux-saga

<br>

>### 포스트 읽기
- id로 자기가 쓴 포스트 찾음

<br>

>### query
- list API는 쿼리 값이 필요
- qs 라이브러리를 통해서 쿼리 값을 편리하게 생성하고 JSON으로 변환 할 수 있다.
- list API의 header에 마지막 페이지 번호를 포함해서 클라이언트에 전달한다.
- Saga의 액션에서 meta에 response 값을 넣어주면 header 상태를 쉽게 조회 할 수 있다.


