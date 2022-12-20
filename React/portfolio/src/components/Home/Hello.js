import React from "react";

const Hello = () => {
    let rollingData = [
        "끊임없이 성장하는",
        "신뢰할 수 있는",
        "항상 공부할 준비가 되어있는",
        "포기를 모르는",
        "함께 할 수 있는",
    ];
    let timer = 2000;

    return (
        <div>
            <div>
                <div>Hi, I am</div>
                <div>
                    <ul className="rolling_box">
                        <li id="rolling_box"></li>
                    </ul>
                </div>
                <div>개발자</div>
                <div>이승희 입니다.</div>
            </div>
        </div>
    );
};

export default Hello;
