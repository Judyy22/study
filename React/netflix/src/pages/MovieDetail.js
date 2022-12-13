import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Review } from "../component/Review";

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
        <div className="container">
            <div className="row movie-detail">
                <div className="col-lg-6">
                    <img
                        className="movie-detail-img"
                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    />
                </div>
                <div className="col-lg-6 movie-detail-right">
                    <div className="movie-detail-genre">
                        {movie?.genres.map((genre) => (
                            <Badge
                                bg="danger"
                                className="movie-detail-genre-own"
                            >
                                {genre.name}
                            </Badge>
                        ))}
                    </div>
                    <div className="movie-detail-first">
                        <div className="movie-detail-title">
                            {movie?.original_title}
                        </div>
                        <div className="movie-detail-tagline">
                            {movie?.tagline}
                        </div>
                        <div>
                            <span className="movie-detail-vote">
                                ⭐{movie?.vote_average}
                            </span>
                            <span className="movie-detail-popularity">
                                <FontAwesomeIcon
                                    icon={faUsers}
                                    className="fontawesome"
                                />
                                {movie?.popularity}
                            </span>
                            <span className="movie-detail-adulte">
                                {movie?.adulte ? "청불" : "under 18"}
                            </span>
                        </div>
                    </div>
                    <div className="movie-detail-overview">
                        {movie?.overview}
                    </div>
                    <div className="movie-detail-third">
                        <div className="movie-detail-release">
                            <Badge bg="danger" className="fontawesome">
                                Release Day
                            </Badge>
                            {movie?.release_date}
                        </div>
                        <div className="movie-detail-release">
                            <Badge bg="danger" className="fontawesome">
                                Time
                            </Badge>
                            {movie?.runtime}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">RELATED MOVIES</div>
            </div>
        </div>
    );
};

export default MovieDetail;
