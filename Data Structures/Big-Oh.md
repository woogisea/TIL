# Big-Oh
## Big-Oh 표기법이란 함수의 증가율의 상한<br>
## 즉 f(n) = O(g(n)) = "f(n)의 증가율은 g(n)의 증가율을 넘지 않는다.

||f(n) = O(g(n))|g(n) = O(f(n))|
|--|--|--|
|g(n)의 증가율이 더 빠르면|yes|no|
|f(n)의 증가율이 더 빠르면|no|yes|
|둘의 증가율이 같으면|yes|yes|
<br>

>계산법
1. f(n)이 상수면 O(c) or O(1)
2. f(n)이 다항식이면 상수계수를 탈락시킨 최고차항
3. 함수계열은 최소한으로
4. 표현은 가장 단순하게

<br>

>분석의 지름길

1. 반복문 (반복문의 실행시간 * 반복횟수)
   ```
   for i <- 1 to n       ----- n
        k <- k+1         ----- 1 (원래는 2n 이지만 n번 반복이므로 지름길로 "1")
        sum <- sum + i   ----- 1 (원래는 2n 이지만 n번 반복이므로 지름길로 "1")

                         ----- O(n)
    ```
    <br>

2. 중첩 반복문 (반복문의 실행시간 * 각 반복문의 크기)
   ```
    for i <- 1 to n       ----- n
        for i <- 1 to n   ----- n * n
            k <- k + 1    ----- 1 

                          ----- O(n*n)
    ```
<br>

3. 연속문 (실행시간 중 최대값)
   ```
   for i <- 0 to n - 1         ----- n
        A[i] <- 0       
    for i <- 0 to n - 1        ----- n          
        for j <- 0 to n - 1    ----- n * n 
             A[i] <- A[i] + A[j]       

                               ----- O(n * n)
    ```
    <br>

4. 조건문 (실행시간 중 큰것을 합산)
    ```
    if ( k = 0)           ----- c
        return            ----- c
    else
        for  i <- 1 to n  ----- n
            j <- j + 1    

                          ----- O(n)  (c 보다 n이 더 크기 때문에)
    ```
