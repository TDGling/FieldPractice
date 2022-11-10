// 프로그래스 페이지 JS - progress.js

$(()=>{
    // loding
    console.log("loding");
    // 변수셋팅
    // . 변경대상 : .lbar
    const lbar = $(".lbar");
    // 변경대상 숫자박스 : .ltxt b
    const ltxt = $(".ltxt b");
    // 

    // 펭수 2 버튼 click
    // .lineper 박스의 .lbar의 width 크기를 %숫자 증가와 매칭하여 보여주기
    // 클릭대상 : .act button > 마지막버튼
    $(".act button").last().click(()=>{
        // 숫자 데이터 증가하기
        chgper();
    });
    // % 증가 숫자변수
    let pernum = 0;
    /* 
        함수명 : chgPer
        기능 : 숫자 % 변경 및 바 % 변경
    */
    function chgper() {
        // 호출
        console.log("%변경");
        // 숫자 % 변경
        // 대상 : ltxt b > ltxt변수
        // ㅠㅓ셋트 숫자 변수 1씩 증가
        pernum++;
        ltxt.text(pernum);

        // 바 % 변경하기
        // 대상 : . lbar > lbar변수
        lbar.css({width:pernum+"%"});
        // 재귀호출 > 자기자신 호출
        // 재귀호출의 한계를 if문으로 제어함
        // pernum이 100이하일때까지만 재귀호출
        if(pernum < 100){
            setTimeout(()=>{
                chgper();
            },70);
        }
        else{ // 100이상이 되는 순간 실행
            // 오디오 플레이 하기
            // 대상 : #myaud
            // 비디오/ 오디오 재생 메서드 : play()
            // 비디오/ 오디오 멈춤 매서드 : pause()
            // 미디어요소는 제이쿼리에서 get()메서드로 선태
            // 이때 첫번째니까 .get(0), [0]
            $("#myaud").get(0).play();
        }
    }
    ///////////////////////////////////////
            // 여러개의 퍼센트박스를 처리할 함수 ////
            let pFn = function (ele, pct) { //ele-대상요소, pct-퍼센트

                // 퍼센트숫자 박스
                let ptxt = $(".btns").eq(ele).find(".ptxt");

                // svg circle요소
                let c1 = $(".btns").eq(ele).find(".c1");


                /////////////////////////////////////
                // 퍼센트 증가 함수 //////////////////
                let prog = function (num) { //num-퍼센트값

                    // 퍼센트값 증가
                    let pers = ptxt.text();
                    pers++;
                    ptxt.text(pers);

                    // svg circle 변경
                    // 분할 된 값을 계산함!
                    // 전체는 300%의 60%라면
                    // 실제는 나머지 퍼센트를 밀어야 하므로
                    // 60%는 100%-60%=40% 이다!
                    // 300*0.4=120%

                    // 계산하기
                    let calc = 300 * (100 - pers) / 100;
                    // 계산법 : 전체옵셋값 X (100%-현재%)/100

                    c1.css({
                        strokeDashoffset: calc + "%"
                    }); ////// css //////////

                    // 재귀호출(자기자신을 다시 호출!)
                    // 자기자신을 호출하는 조건(퍼센트한계)
                    if (pers < num) {

                        setTimeout(() => {
                            prog(num);
                        }, 30); /// 타임아웃 //

                    } //////// if /////////////

                }; //////// prog함수 ////////////////
                /////////////////////////////////////

                // 함수를 최초호출함!
                prog(pct); //퍼센트를 전달함!

            } ///////////// pFn 함수 ////////////////
            /////////////////////////////////////////

             // 버튼 클릭시
             $(".act button").click(function () {

                // 버튼 글자읽기
                let btxt = $(this).text();
                console.log(btxt);

                if (btxt === "팽수1") {
                    pFn(0, 77);
                    pFn(1, 63);
                    pFn(2, 88);
                    pFn(3, 95);
                } ///////// if문 /////////
                else if (btxt === "팽수2") {
                    lineFn(80);
                } //////// else if문 //////

            }); //////////// click ///////////////
})