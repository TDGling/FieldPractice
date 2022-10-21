// 옷소매 갤러리 JS - main.js

// 로드구역
window.addEventListener("DOMContentLoaded", () => {
    // 기능구현내용 :
    // 버튼클릭시 갤러리 div박스를 순서이동하기
    // 오른쪽 버튼 클릭시 -> 맨앞요소 맨뒤로 이동 -> appendChild(요소)
    // 왼쪽 버튼 클릭시 -> 맨뒤요소 맨앞으로 이동 -> insertBefore(넣을놈,넣을놈전놈)

    // 변경 대상 : .gbx
    const gbx = document.querySelector(".gbx");

    // 이벤트 대상 : .abtn
    const abtn = document.querySelectorAll(".abtn");
    // 0번째는 왼쪽버튼, 1번째는 오른쪽버튼
    abtn[0].onclick = () => goSlide(0);
    abtn[1].onclick = () => goSlide(1);

    // 광클금지 상태변수
    let prot = 0; // 0-허용 1- 불허용

    // 함수명 : goSlide
    // 기능 : 내부 박스요소 앞뒤로 이동
    function goSlide(dir) {
        // 0. 광클금지
        if (prot) return;
        // prot ===1 이면 돌아가
        prot = 1; //잠금
        setTimeout(() => {
            prot = 0;
        }, 400); //0.4초후 잠금해제

        // dir 0 왼쪽, 1 오른쪽
        // 1. 전달값 호출
        console.log("me", dir);
        // 2. 이동할 직계자식 div담기
        // 주의 : 이동할때마다 귀해와야 최신순서를 담는다.
        let tg = gbx.querySelectorAll("div");
        // console.log(tg);
        // 3. 분기하기
        // 3-1. 오른쪽 버튼일때 : div===1(true)
        if (dir) {
            // 맨앞요소 맨뒤로 이동
            gbx.appendChild(tg[0]);
        } // if
        // 3-2. 왼쪽 버튼일때 : div===0(false)
        else {
            // 맨뒤요소 맨 앞으로 이동
            gbx.insertBefore(tg[tg.length - 1], tg[0]);
            // 맨뒤요소는 [개수-1]
        }
    }
});
