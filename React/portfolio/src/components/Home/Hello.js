import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

const textArray = [
    "끊임없이 성장하는",
    "신뢰할 수 있는",
    "항상 공부할 준비가 되어있는",
    "포기를 모르는",
    "언제나 도전하는",
];

const Hello = () => {
    const [showTitle, setShowTitle] = useState(""); //n초마다 이전 텍스트 + 현재 텍스트 합쳐줌
    const [count, setCount] = useState(0); //글자 수 카운트
    const [textCount, setTextCount] = useState(0); //글자 배열 카운트
    const text = textArray[textCount]; //완성할 텍스트

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setShowTitle((prevTitleValue) => {
                let result = prevTitleValue
                    ? prevTitleValue + text[count]
                    : text[0];
                setCount(count + 1);

                if (count == text.length) {
                    setCount(0);
                    setShowTitle("");
                    if (textCount == textArray.length - 1) {
                        setTextCount(0);
                    } else {
                        setTextCount(textCount + 1);
                    }
                }

                return result;
            });
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    });

    return (
        <div className="homemain">
            <>
                <h1>Hi, I am</h1>
                <div className="randomBox">
                    <div className="Box-cursor">{showTitle}</div>
                    <FontAwesomeIcon icon={faArrowPointer} className="icon" />
                </div>
                <div className="developer">Developer</div>
                <div>안녕하세요, 이승희 입니다.</div>
            </>
        </div>
    );
};

export default Hello;
