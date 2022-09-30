// CGV PJ 메인 페이지 JS - main.js

// 예고편 선택메뉴 a요소 -> movlink 변수
var movlink = document.querySelectorAll(".mlist a");
console.log(movlink);

// a 요소 개수
var len = movlink.length;
// length는 개수를 구해오는 속성

// for문을 이용하여 링크 설정하기
// for(시;한;증){실행코드}
for(var i=0;i<len;i++){
    // 순서대로 a요소에 chlik 이벤트 설정
    // 대상 : movlink 변수 
    movlink.item(i).onclick = function() {chgMV()};
    // onclick은 adㅛ소의 이벤트 속성
    // 이퀄 오른쪽에 할당 이때 chgmv() 함수를 직점 쓰면 함수가 바로 실행됨
    // 따라서 이벤트 발새잇 호출하려면 익명함수 즉 , function(){} 안에 써야함
    // 이것은 마치 <a href="" onclick="chgmv()"> 라고 설정한 것과 같다.
    // console.log("되나?",i);
}

// 함수명 : chgMV
// 기능 : iframe의 영화 예고편 변경하기
function chgMV(){
    // 1.호출획인
    console.log("바꿔");
    // 2. 변경대상 : #screen iframe
    var tg = document.querySelector("#scrren iframe");
    // 3. 변경내용 : 대상요소의 src속성을 변경함!
    tg.scr = "" 
}