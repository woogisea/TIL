# Commit 부터 Push 까지
> 로컬과 원격 레포지 끼리 연결
 ```
 git remote add origin <레포지 주소>
 ```
<br>

> add 할 문서 선택
```
git add -A (전체 선택)
git add [커밋하고 싶은 파일명]
```
<br>

> Commit
```
git commit -m "commit message"
```
**각 파일마다 커밋메세지를 다르게 하고 싶을 경우에 파일마다 커밋메세지를 다르게 설정 후 한번에 푸쉬**
<br>

> Push
```
git push origin master
```

>Pull
```
git pull origin master
```
**원격 레포지에서 바로 변경을 했을 경우에 로컬로 변경사항을 저장**





