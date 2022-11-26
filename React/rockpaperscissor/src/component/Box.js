import React from "react";

const Box = (props) => {
    return (
        <div className="box">
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img} />
            <h2>WIN</h2>
        </div>
    );
};

export default Box;
