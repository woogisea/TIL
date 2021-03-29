## 데이터 조작어 -검색
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

<br>

>집계 함수

|집계함수|문법|
|--|--|
|SUM|SUM(속성이름)|
|AVG|AVG(속성이름)|
|COUNT|COUNT(속성이름)|
|MAX|MAX(속성이름)|
|MIN|MIN(속성이름)|

```sql
ex )  select sum(saleprice) from orders --- 고객이 주문한 도서의 총 판매액
``` 