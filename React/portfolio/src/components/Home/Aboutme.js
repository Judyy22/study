import React from "react";
import Leftbox from "./Leftbox";
import Rightbox from "./Rightbox";

const Aboutme = () => {
    return (
        <div className="aboutmebox">
            <div className="left-box">
                <div>
                    <Leftbox />
                </div>
            </div>
            <div className="right-box">
                <div>
                    <Rightbox />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
