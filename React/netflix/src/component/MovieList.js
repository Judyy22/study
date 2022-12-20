import React from "react";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const MovieList = ({ item }) => {
    const { genreList } = useSelector((state) => state.movie);
    const navigate = useNavigate();
    const showMovieDetail = (id) => {
        navigate(`/movies/${id}`);
    };

    return (
        <div
            className="col-sm-3 listcard"
            onClick={() => showMovieDetail(item.id)}
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item?.backdrop_path}` +
                    ")",
            }}
        >
            <div className="listcard-view">
                <img
                    className="listcard-poster"
                    src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                />
                <div className="listcard-title">
                    <h2>{item?.original_title}</h2>
                    {item?.genre_ids.map((id) => (
                        <Badge bg="danger" className="listcard-badge">
                            {genreList.find((item) => item.id == id).name}
                        </Badge>
                    ))}
                    <div>
                        <span className="listcard-vote">
                            ⭐{item?.vote_average}
                        </span>
                        <span className="listcard-popularity">
                            <FontAwesomeIcon
                                icon={faUsers}
                                className="listcard-fontawesome"
                            />
                            {item?.popularity}
                        </span>
                        <span className="listcard-adulte">
                            {item?.adulte ? "18+" : "under 18"}
                        </span>
                    </div>
                </div>
                <div className="listcard-overview">{item?.overview}</div>
            </div>
        </div>
    );
};

export default MovieList;
