import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate("/products?q=pants");
    };
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/about">Go to About page</Link>
            <button onClick={goProductPage}>go to product page</button>
        </div>
    );
};

export default Homepage;
