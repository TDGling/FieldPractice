// HTML출력 jsx

// 변수에 태그를 jsx문법으로 작성하여 할당한다
// jsx는 최상위 부모가 하나야여 한다(기본xml문법과 동일
const myelement = (
    <div>
        <h1>나의 친구 리스트</h1>
        <table>
            <tr>
                <td>이름</td>
                <td>전화번호</td>
                <td>생일</td>
            </tr>
            <tr>
                <td>전소민</td>
                <td>010-1234-1234</td>
                <td>90.03.04</td>
            </tr>
            <tr>
                <td>김혁수</td>
                <td>010-5678-5678</td>
                <td>02.05.08</td>
            </tr>
            <tr>
                <td>이상화</td>
                <td>010-8765-4321</td>
                <td>00.07.08</td>
            </tr>
        </table>
    </div>
);

// 화면출력
// ReactDOM.render(출력할요소,출력요소)
ReactDOM.render(myelement, document.getElementById("root"));
