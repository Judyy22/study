import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

const text = [
    "끊임없이 성장하는",
    "신뢰할 수 있는",
    "항상 공부할 준비가 되어있는",
    "포기를 모르는",
    "언제나 도전하는",
];

const Hello = () => {
    const [randomSelect, setRandomSelect] = useState(null);

    const play = () => {
        setRandomSelect(randomChoice());
    };
    console.log("뭐가 나올라나", randomSelect);
    const randomChoice = () => {
        let itemArray = Object.keys(text); // 객체의 키값만 뽑아서 어레이로 만들어주는 함수
        console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return text[final];
    };
    return (
        <div className="homemain">
            <>
                <h1>Hi, I am</h1>
                <div className="randomBox">
                    <div>{randomSelect}</div>
                    <FontAwesomeIcon
                        icon={faArrowPointer}
                        className="icon"
                        onMouseEnter={play}
                    />
                </div>
                <div className="developer">Developer</div>
                <div>안녕하세요, 이승희 입니다.</div>
            </>
        </div>
    );
};

export default Hello;
