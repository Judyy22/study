import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RelatedSlider = ({ movie }) => {
    const navigate = useNavigate();
    const showMovieDetail = (id) => {
        navigate(`/movies/${id}`);
    };
    const { genreList } = useSelector((state) => state.movie);
    return (
        <div>
            <div
                className="rel-card"
                onClick={() => showMovieDetail(movie.id)}
                style={{
                    backgroundImage:
                        "url(" +
                        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
                        ")",
                }}
            >
                <div className="overlay">
                    <div className="overlay-position">
                        <h1>{movie.title}</h1>
                        <div>
                            {movie.genre_ids.map((id) => (
                                <Badge bg="danger" className="badge">
                                    {
                                        genreList.find((item) => item.id == id)
                                            .name
                                    }
                                </Badge>
                            ))}
                        </div>
                        <div className="rel-card-info">
                            <span>⭐{movie.vote_average}</span>
                            <span className="rel-card-adulte">
                                {movie.adulte ? "18+" : "under 18"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedSlider;
