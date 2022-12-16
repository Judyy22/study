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
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/Actions/movieAction";

const MovieDetail = () => {
    const dispatch = useDispatch();
    const [reviewActive, setReviewActive] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const { id } = useParams();

    const { movieDetail, movieReviews, relatedMovie, movieTrailer } =
        useSelector((state) => state.movie);
    const movie = movieDetail;
    const review = movieReviews;
    const related = relatedMovie;
    const trailer = movieTrailer;
    console.log("디테일이다아", movie);
    console.log("리뷰유유유유", review);
    console.log("유사영화아ㅏㅏㅏ", related);
    console.log("트레일러어어어어어", trailer);

    review?.results.map((movie) => console.log("djkadjkls", movie.id));

    function showModal() {
        setModalOpen(true);
    }
    function closeModal() {
        setModalOpen(false);
    }

    const getMovieDetails = async () => {
        dispatch(movieAction.getMovieDetails(id));
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
