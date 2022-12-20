import React from "react";
import BoardList from "../component/BoardList";
import BoardWrite from "../component/BoardWrite";
import Header from "../component/Header";

const Board = () => {
    return (
        <div>
            <Header item={"한줄평 쓰기"} />
            <div className="container">
                <BoardWrite />
                <BoardList />
            </div>
        </div>
    );
};

export default Board;
