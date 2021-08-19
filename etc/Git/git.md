# Git의 기초(Terminal 기반)

Git Version 확인하기
```
git --version
```


사용자 정보 설정
```
git confing --global user.name "name"

git confing --global user.email "email"
```
사용자 정보 확인
```
git confing user.name                                         
git confing user.email
```

---
운영체제에 따른 줄바꿈 문제 해결<Mac일 경우에>
```
git config --global core.autocrlf input
```