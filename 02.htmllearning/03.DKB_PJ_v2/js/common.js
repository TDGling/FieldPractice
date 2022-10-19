// 도깨비 PJ v2 - 공통기능 JS - common.js

// 로드구역
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩");
    // 햄버거 버튼 클릭시 .top .on 추가 제거
    // 전체미뉴 보이기 디자인 구현이 되어있음
    // 대상 : ham
    const ham = document.querySelector(".ham");
    const top = document.querySelector(".top");
    ham.onclick = () => top.classList.toggle("on");
});
