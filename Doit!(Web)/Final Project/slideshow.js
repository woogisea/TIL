// 이미지를 list로 처리
var slides = document.querySelectorAll("#slides > img");

var prev = document.getElementById("prev");
var next = document.getElementById("next");

// 슬라이드 번호를 저장할 변수
var current = 0;

showSlide(current);
// prev,next 버튼을 눌렀을 때 함수 호출
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n){
    // 처음에는 그림을 안보이게 설정
    for(var i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    // n번째 이미지를 보이게 설정
    slides[n].style.display = "block";
}


function nextSlide() {
    if(current == slides.length-1 ) { current = 0; }
    else { current+=1; }
    showSlide(current);
}

function prevSlide() {
    if(current == 0) { current  = slides.length-1; }
    else { current -= 1;}
    showSlide(current);

}
