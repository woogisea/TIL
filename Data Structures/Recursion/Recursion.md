# Recursion (재귀)

재귀 충족 조건
1. 재귀 케이스 (recursive case) : 반드시 원래의 문제보다 작아진 부문제들을 대상으로 이루어져야함
2. 베이스 케이스 (base case) : 재귀를 사용하지 않고 해결하는 부분
   
   ex)
   ```
   Alg sum(n)
   if(n = 1)
       return 1                  {base case}
   else
       return n + sum(n-1)       {recursion}
    ```

   
   