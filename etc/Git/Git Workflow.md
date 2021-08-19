# Git Workflow


>local(내 컴퓨터)에만 git history가 저장되어 있는 상태
1. working directory
2. staging area
3. .git directory
   
<br>

>push 명령어를 통해서 서버에 upload(.git directory)
>pull 명령어를 통해서 서버에서 local로(.git directory)

<br>


>staging area에 commit할 준비를 만들기 위해서 add 명령어 사용
```
git add <파일명>
```
<br>

>staging area에 들어간 파일들을 다시 untracked
```
git rm --cached <파일명>
```
<br>

>파일 삭제 후 add
```
rm <파일명>

git add .
```
"."을 쓰면 모든 파일들을 포함에서 staging area에 추가
<br>

