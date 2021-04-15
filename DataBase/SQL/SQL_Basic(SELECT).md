## 데이터 조작어 -검색, 삽입, 수정, 삭제
---
## 질의어를 읽고 이해를 해서 만족하는 조건식을 짜는게 능력

<br>

### Select 문의 구성요소
1. SELECT :  속성 이름 ,  ( * : 모든 속성 )
2. FROM : 테이블 이름
3. WHERE : 검색 조건

<br>

>SELECT,FROM 예제 


```sql
select distinct <속성> from <테이블>;      ---중복 제거
select distinct <속성> from <테이블> order by <속성>    --- 속성에 대한 sort
```
<br>

>WHERE 조건 예제

|술어|연산자|예|
|--|--|--|
|비교|=, <, <= , >, >=|price < 20000|
|범위|BETWEEN|price BETWEEN 10000 AND 20000|
|집합|IN, NOT IN|price IN (10000, 20000, 30000)|
|패턴|LIKE|bookname LIKE '축구의 역사'|
|NULL|IS NULL, IS NOT NULL|price IS NULL|
|복합조건|AND, OR, NOT|(price < 20000) AND (bookname LIKE '축구의 역사')|

```sql
select * from <테이블> where <특정 속성> <조건>;

ex )  select * from <테이블> where price < 20000;

ex )  select * from <테이블> where bookname like '%축구%' ---'축구'라는 단어를 포함한 모든 bookname;
``` 

>INSERT

기존 테이블에 추가하고 싶은 값만 넣을 때 사용 
```sql
insert into 테이블 이름(속성 리스트) values (값 리스트);
ex ) insert into book(bookid, bookname, publisher) values (11, '스포츠 의학', '한솔 의학 서적');
 
 ---대량 삽입
 ---imported_book에 있는 내용을 book으로 옮긴다.
 insert into book(bookid, bookname, price, publisher) select bookid, bookname, price, publisher from imported_book;
 ```
 <br>

 >UPDATE

```sql
update 테이블 이름 set 속성이름 = 값1      ---속성이름의 값을 전부 바꿈
update 테이블 이름 set 속성이름 = 값1 where 검색조건    ---검색조건에 맞는 값만 바꿈, 조건 설정에 주의를 기울여서 작성 할 것.
 ```
 <br>

 >DELETE

```sql
delete from 테이블 이름      ---테이블에 있는 값이 전부 지워진다.
delete from 테이블 이름  where 검색조건    ---검색조건에 맞는 테이블 값만 지워진다.
 ```
 