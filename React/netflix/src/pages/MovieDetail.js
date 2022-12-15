import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    faUsers,
    faTelevision,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MovieReview from "../component/MovieReview";
import RelatedMovie from "../component/RelatedMovie";
import Modal from "react-modal";
import YouTube from "react-youtube";

const MovieDetail = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [movie, setMovie] = useState(null);
    const [review, setReview] = useState(null);
    const [related, setRelated] = useState(null);
    const [reviewActive, setReviewActive] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [trailer, setTrailer] = useState(null);
    const { id } = useParams();

    function showModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }

    const getMovieDetails = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;
        let response = await fetch(url);
        let data = await response.json();
        setMovie(data);
        console.log("movieDetail", data);
    };

    const getMovieReview = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        setReview(data);
        console.log("movieReview", data);
    };

    const getRelatedMovie = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=ko-KR&page=1`;
        let response = await fetch(url);
        let data = await response.json();
        setRelated(data);
        console.log("RelatedMovie", data);
    };

    const getTrailer = async () => {
        let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
        let response = await fetch(url);
        let data = await response.json();
        setTrailer(data.results[0]);
        console.log("Trailerdata", data);
        console.log("key", data.results[0].key);
    };

    useEffect(() => {
        getMovieDetails();
        getMovieReview();
        getRelatedMovie();
        getTrailer();
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
                        <div className="movie-detail-title">{movie?.title}</div>
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
                                {movie?.adulte ? "18+" : "under 18"}
                            </span>
                        </div>
                    </div>
                    <div className="movie-detail-overview">
                        {movie?.overview}
                    </div>
                    <div className="movie-detail-third">
                        <div className="movie-detail-release">
                            <Badge bg="danger" className="fontawesome">
                                Language
                            </Badge>
                            {movie?.spoken_languages.map((language) => (
                                <span className="movie-language">
                                    {language.english_name}
                                </span>
                            ))}
                        </div>
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
                        <div className="movie-detail-release">
                            <Badge bg="danger" className="fontawesome">
                                budget
                            </Badge>
                            $ {movie?.budget}
                        </div>
                    </div>
                    <div className="movie-detail-third">
                        <span>
                            <button
                                onClick={showModal}
                                className="movie-detail-trailer"
                            >
                                <FontAwesomeIcon
                                    icon={faTelevision}
                                    className="fontawesome"
                                />
                                Watch Trailer
                            </button>
                            <Modal
                                isOpen={modalOpen}
                                style={{
                                    content: {
                                        backgroundColor: "#000",
                                        padding: "0",
                                    },
                                }}
                            >
                                <div className="closeposition">
                                    <button
                                        onClick={closeModal}
                                        className="modalclose"
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>

                                <div className="trailer">
                                    <YouTube videoId={trailer?.key} autoplay />
                                </div>
                            </Modal>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button
                        onClick={() => setReviewActive(!reviewActive)}
                        className={
                            reviewActive ? "reviewActive" : "reviewInactive"
                        }
                    >
                        REVIEWS({review?.results.length})
                    </button>
                </div>
                <div className="col">
                    <button
                        onClick={() => setReviewActive(!reviewActive)}
                        className={
                            reviewActive ? "reviewInactive" : "reviewActive"
                        }
                    >
                        RELATED ({related?.results.length})
                    </button>
                </div>
                <div>
                    {reviewActive ? (
                        <MovieReview review={review} />
                    ) : (
                        <RelatedMovie related={related} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
