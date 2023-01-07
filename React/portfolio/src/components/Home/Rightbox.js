import React from "react";
import BackEnd from "./BackEnd";
import CodeEditor from "./CodeEditor";
import DataBase from "./DataBase";
import FrontEnd from "./FrontEnd";

const Rightbox = () => {
    return (
        <div>
            <div>
                <FrontEnd />
            </div>
            <div>
                <BackEnd />
            </div>
            <div>
                <CodeEditor />
            </div>
            <div>
                <DataBase />
            </div>
        </div>
    );
};

export default Rightbox;
