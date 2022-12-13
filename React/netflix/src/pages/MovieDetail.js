import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/Actions/movieAction";

const MovieDetail = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const getMovieDetails = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
        let response = await fetch(url);
        let data = await response.json();
        setMovie(data);
        console.log("data", data);
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return (
        <div>
            <div>${movie.original_title}</div>
        </div>
    );
};

export default MovieDetail;
