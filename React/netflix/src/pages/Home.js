import React, { useEffect } from "react";
import { movieAction } from "../redux/Actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
        (state) => state.movie
    );
    console.log("home", popularMovies);

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);
    return <div>Home</div>;
};

export default Home;
