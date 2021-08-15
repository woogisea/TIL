## ~ redux-saga

<br>

>### 글쓰기, 글쓰기 성공, 글쓰기 실패
- post(글쓰기 등록)시에는 title,body,tags 전부
- 결과는 auth,authError로 확인

<br>

>### post 등록 성공하면
- post에서 받아온 id, user 정보를 통해 history를 이용 해당 경로로 이동

<br>


>### post 등록 실패하면
- history.goBack()으로 뒤로가기
