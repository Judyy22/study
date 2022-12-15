import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieList = ({ item }) => {
    return <div>{item.title}</div>;
};

export default MovieList;
