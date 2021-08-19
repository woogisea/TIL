## #4


>### animation
<br>

- animation-delay <br>
엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.

- animation-direction <br>
애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.

- animation-duration <br>
한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.

- animation-iteration-count (en-US) <br>
애니메이션이 몇 번 반복될지 지정합니다. infinite로 지정하여 무한히 반복할 수 있습니다.

- animation-name (en-US) <br>
이 애니메이션의 중간 상태를 지정합니다. 중간 상태는  @keyframes 규칙을 이용하여 기술합니다.

- animation-play-state (en-US) <br>
애니메이션을 멈추거나 다시 시작할 수 있습니다.

- animation-timing-function (en-US) <br>
중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.

- animation-fill-mode <br>
애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.

<br>

>### text2(JAEWOOK)의 위에서 아래로 내려오는 animation
<br>

- animation이 처음 시작할 때 WELCOME IN의 margin-bottom : -40px로 설정, JAEWOOK이 WELCOME IN과 겹치게 만들었다 

- <mark>position : relative</mark> 와 backgroud : black을 통해서 WELCOME IN의 마진때문에 겹쳐지는 JAEWOOK을 안보이게 만들었다. 

- WELCOME IN 자체 animation이 끝나 기본 margin 값으로 돌아오면 보이게 된다.

<br>


<img src = "https://raw.githubusercontent.com/Dev-jwJeong/TIL/master/Practice_CSS/img/%234.gif" width = "500px">

