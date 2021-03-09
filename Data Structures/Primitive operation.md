# Primitive operation(원시작업)

1. 산술식/논리식의 평가(EXP)
2. 변수에 특정값을 치환(ASS)
3. 배열원소 접근(IND)
4. 메쏘드 호출(CAL)
5. 메쏘드로부터 반환(RET)

<br>

>Example
```
1. currentMax <- A[0]
2. for i <- 1 to n-1
        if( A[i] <- currentMax )
            currentMax <- A[i]
        {increment counter i}
3. return currentMax
```
1. { IND, ASS  2 }
2. { ASS, EXP  1+n} <br>
    치환하는 과정에서 1 <br>
    n-1회 반복하고 반복을 빠져나가는 마지막 경우까지 포함하여 +1 
3. { IND, EXP 2(n-1) } <br>
    배열에 대한 접근과 평가가 모두 n-1번씩 <br>
    **실행시간 면에서 최악이 된다는 점에 착안하여 계산진행** <br>
    그래서 if문 안의 모든 계산값은 같다.
4. { IND, ASS 2(n-1) }<br>
5. { EXP, ASS 2(n-1) }<br>
    i++ 연산후에 다시 i로 치환하므로 (ASS)
6. { RES 1} <br>
7. { Total 7n-2 }<br>
