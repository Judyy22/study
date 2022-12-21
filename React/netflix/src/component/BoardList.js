import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BoardItem from "./BoardItem";

const BoardList = () => {
    const { boardList } = useSelector((state) => state.board);

    return (
        <div>
            {boardList.map((item) => (
                <div className="boardlistbox">
                    <BoardItem item={item} />
                </div>
            ))}
        </div>
    );
};

export default BoardList;
