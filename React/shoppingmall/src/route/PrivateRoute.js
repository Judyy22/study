import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = () => {
    const authenticate = useSelector((state) => state.auth.authenticate);
    return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
