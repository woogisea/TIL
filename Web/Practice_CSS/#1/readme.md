## #1


>### margin : 0, padding :0 <br>
태그에 기본적으로 적용되어 설정되어 있는 margin,padding 초기화

<br>

>### position: absolute, left : 50%, top : 50%
조상 요소에 대해 상대적으로 배치, 왼쪽 50% 위 50%면 중앙으로 위치할꺼 같지만 아니다. <br>

스타일 지정한 태그의 왼쪽 꼭지점 부분이 중앙으로 위치, transform: translate(-50%, -50%) 을 통해서 정중앙으로 위치시킨다. margin을 통해서도 지정 가능

<br>

>### outline : none
input이 focus 되었을 때 기본적으로 적용되는 테두리 제거 <br>
:focus를 통해 커스텀 가능

<br>

>### auto
남은 너비를 균등하게 계산해서 분배 <br>
ex) margin : 20px auto <br>
위아래 20, 좌우는 균등하게

<img src = "https://raw.githubusercontent.com/Dev-jwJeong/TIL/master/Practice_CSS/img/img%231.png" width = "500px" >