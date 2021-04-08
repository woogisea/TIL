## 부속 질의
---
### 두 개 이상 테이블에서 SQL 질의 하는법 
|명칭|위치|설명|
|--|--|--|
|스칼라 부속질의|SELECT 절|단일 값을 반환|
|인라인 뷰|FROM 절|결과를 view형태로 반환|
|중첩질의(부속질의)|WHERE 절|결과를 한정시키기 위해서 사용|

<br>


> 부속질의문이 가장 먼저 실행이 된다. 

<br>

기본적으로 join 연산으로 해결이 불가능 할 때 사용 <br>
join보다 훨씬 효율적일 때 <br>
대표적으로 특정 값과의 비교(최대값, 평균값, ...)에는 부속 질의가 더 편하고 부속질의만 사용할 수 있는 경우가 더 많다.  <br>

<br>

---
### 스칼라 부속질의
join을 통해서도 구현 할 수 있다.

```sql
---스칼라 부속질의 사용
select custid, (select name from customer cs where cs.custid = od.custid),sum(saleprice) 
from order od 
group by custid;

---join 사용
select od.custid,cs.name sum(saleprice) 
from order od, customer cs 
where od.custid = cs.custid;
```

<br>

### 인라인 뷰
잘못쓰면 DB가 멈춰버린다. 조심    <br>
인라인뷰를 사용하지 않고 구현할 수 있지만 인라인뷰를 사용하면 효율적인 코드를 작성할 수 있다.

```sql
---cs라는 임시 테이블이 만들어진다.
---임시테이블이 잘못 만들어지면 무한 루프가 돌아간다.
--- 튜플의 갯수 2*10 = 20
select cs.name, sum(od.saleprice)
from (select custid, name
      from customer
      where custid <= 2) cs, orders od
where cs.custid = od.custid
group by cs,name;

---튜플의 갯수 5*10 = 50
select cs.name, sum(od.saleprice)
from customer cs, orders od
where cs.custid = od.custid and cs.custid <= 2
```

<br>

### 중첩질의(부속질의)

```sql
--- 책의 가격중에서 가장 비싼 책의 이름
select bookname 
from book 
where price = (select max(price) 
               from book);

--- 비교 연산자 활용 (가장 비싼 책의 가격보다 작은 책들)
--- 비교 연산자를 사용할때는 부속질의의 값이 한개여야만 한다.
select bookname 
from book 
where price < (select max(price) 
               from book);

--- 단일값이 아닌 값이 리턴되는 부속질의 경우에는 all(전체) 또는 some(any)(최소한)를 사용해야 한다.
select orderid, saleprice
from orders
where saleprice -> all(select saleprice
                       from orders
                        where custid='3')     

--- 부속질의의 값이 여러개 일 때(동등join으로도 가능)
select name 
from customer 
where custid IN (select custid
                 from orders);
```

<br>

```sql
--- exists = 부속질의문의 조건이 만족하는(true) 값만 최종 결과에 포함시킨다.
--- not exists = exists와 반대
select name, address 
from customer cs 
where exists(select * 
             from orders od 
             where cs.custid = od.custid);
```

<br>



