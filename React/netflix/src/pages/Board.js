import React from "react";
import BoardList from "../component/BoardList";
import BoardWrite from "../component/BoardWrite";
import Header from "../component/Header";

const Board = () => {
    return (
        <div>
            <div>
                <Header item={"한줄평 쓰기"} />
                <BoardWrite />
                <BoardList />
            </div>
        </div>
    );
};

export default Board;
