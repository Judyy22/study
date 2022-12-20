import React from "react";

const BoardItem = ({ item }) => {
    console.log(item);
    if (item != null) {
        return (
            <div className="container">
                <div className="boardItem">
                    <div className="borderitemtitle">
                        작성자 : {item.name} / 영화제목 : {item.movieTitle}
                    </div>
                    <div className="borderitemcontent">{item.content}</div>
                </div>
            </div>
        );
    } else {
        return;
    }
};

export default BoardItem;
