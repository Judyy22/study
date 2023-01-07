import React from "react";
import { useState, useEffect, useRef } from "react";
import AnimatedCursor from "../components/AnimatedCursor";
import Dots from "../components/Dots";
import Aboutme from "../components/Home/Aboutme";
import Hello from "../components/Home/Hello";

const DIVIDER_HEIGHT = 5;

const Home = () => {
    const outerDivRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(1);
    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
            const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

            if (deltaY > 0) {
                // 스크롤 내릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    console.log("현재 2페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 3
                ) {
                    //현재 3페이지
                    console.log("현재 3페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(4);
                } else {
                    // 현재 4페이지
                    console.log("현재 4페이지, down");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(4);
                }
            } else {
                // 스크롤 올릴 때
                if (scrollTop >= 0 && scrollTop < pageHeight) {
                    //현재 1페이지
                    console.log("현재 1페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 2
                ) {
                    //현재 2페이지
                    console.log("현재 2페이지, up");
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(1);
                } else if (
                    scrollTop >= pageHeight &&
                    scrollTop < pageHeight * 3
                ) {
                    //현재 3페이지
                    console.log("현재 3페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(2);
                } else {
                    // 현재 4페이지
                    console.log("현재 4페이지, up");
                    outerDivRef.current.scrollTo({
                        top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
                        left: 0,
                        behavior: "smooth",
                    });
                    setScrollIndex(3);
                }
            }
        };
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);
    return (
        <div ref={outerDivRef} className="outer">
            <AnimatedCursor />
            <Dots scrollIndex={scrollIndex} />
            <div className="inner bg-purple">
                <Hello />
            </div>
            <div className="divider"></div>
            <div className="inner bg-lightpurple">
                <Aboutme />
            </div>
            <div className="divider"></div>
            <div className="inner bg-lightpurple">3</div>
            <div className="divider"></div>
            <div className="inner bg-lightpurple">4</div>
        </div>
    );
};

export default Home;
