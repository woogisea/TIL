## 집계함수와 GROUP BY
---

>집계 함수

|집계함수|문법|
|--|--|
|SUM|SUM(속성이름)|
|AVG|AVG(속성이름)|
|COUNT|COUNT(속성이름), 중복값도 포함|
|MAX|MAX(속성이름)|
|MIN|MIN(속성이름)|

```sql
ex )  select sum(saleprice) from orders --- 고객이 주문한 도서의 총 판매액
``` 

>GROUP BY
속성값이 같은 튜플끼리 묶어준다.
```sql
ex ) select count(*) from order as 도서수량 group by custid    --같은 custid로 묶인 도서수량

ex ) select count(*) from order as 도서수량 group by custid having count(*) > 2    ---- group by에 대한 조건을 붙여주려면 having을 사용
---- having이 나오기 위해선 group by가 선행되어야 한다.
```

<br>

>조인 , 외부 조인
```sql
ex ) select * from customer, orders where customer.custid = orders.custid;
       ---고객 + 주문을 합친 테이블에서 조건 탐색
ex ) select customer.name, saleprice from customer left outer join orders on customer.custid = orders.custid;
      ---도서를 구매하지 않은 것도 포함 즉 customer.custid 와 orders.custid가 같지 않은(도서를 구매하지 않은) customer도 포함해서 출력한다.

      --- left outer join (왼쪽 속성 포함), right outer join (오른쪽 속성 포함), full outer join (왼쪽, 오른쪽 둘다 포함)
```
