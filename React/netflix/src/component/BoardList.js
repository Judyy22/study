import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";

const BoardList = () => {
    const { boardList } = useSelector((state) => state.board);

    return (
        <div>
            <div>
                <BoardItem />
                {boardList.map((item) => (
                    <BoardItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default BoardList;
