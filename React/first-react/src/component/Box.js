import React from "react";

const Box = (props) => {
    return (
        <div className="box">
            {props.num}
            <p>{props.name}</p>
        </div>
    );
};

export default Box;
