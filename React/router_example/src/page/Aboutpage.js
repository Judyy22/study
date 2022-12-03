import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
    const navigate = useNavigate();
    const goToHompage = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>Aboutpage</h1>
            <button onClick={goToHompage}>Go to Homepage</button>
        </div>
    );
};

export default Aboutpage;
