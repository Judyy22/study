import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MovieList from "../component/MovieList";
import SideBar from "../component/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Movies = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movieList, setMovieList] = useState(null);

    const getNowPlaying = async () => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        setMovieList(data.results);
        console.log("movieList", data.results);
    };
    useEffect(() => {
        getNowPlaying();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <SideBar />
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        {movieList?.map((item) => (
                            <MovieList item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movies;
