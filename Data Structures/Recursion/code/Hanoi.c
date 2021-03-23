//재귀를 이해할 수 있는 하노이탑 문제
//전체적인 개념으로는
// (1)from에서 aux로 가장 크기가 큰 원판 1개를 뺸 n-1개를 옮긴다
// (2)가장 큰 1개를 to로 옮긴다(따로 재귀를 호출하지 않아도 base case를 통해서 가능)
// (3)aux에 있는 n-1개의 원판을 to로 옮긴다(이중재귀를 통해서)


// 식은 간단하지만 그 속에 숨어있는 여러개의 알고리즘, 재귀의 진행과정을 이해하는데 도움이 된다.


#include <stdio.h>
void rHanoi(int n, char from, char aux, char to)
{
    if(n == 1)
    {
        printf("%c %c\n",from,to);
    }
    else
    {
        rHanoi(n-1,from,to,aux);
        printf("%c %c\n",from,to);
        rHanoi(n-1,aux,from,to);
    }
}
int main()
{
    int N;
    char A, B, C;
    
    scanf("%d",&N);
    
    rHanoi(N, 'A', 'B', 'C');
}
