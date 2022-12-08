import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { populrMovies, topRatedMovies, upcomingMovies } = useSelector(
        (state) => state.movie
    );
    console.log("home", populrMovies);
    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    return <div>Home</div>;
};

export default Home;
