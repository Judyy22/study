import React from "react";

const Box = (props) => {
    let result;
    if (
        props.title == "computer" &&
        props.result !== "tie" &&
        props.result !== ""
    ) {
        result = props.result == "win" ? "lose" : "win";
    } else {
        result = props.result;
    }
    return (
        <div className={`box ${result}`}>
            <h1>{props.title}</h1>
            <h2 data-testid="item-name">{props.item && props.item.name}</h2>
            <img className="item-img" src={props.item && props.item.img} />
            <h2>{result}</h2>
        </div>
    );
};

export default Box;
