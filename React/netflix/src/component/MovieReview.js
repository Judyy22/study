import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieReview = ({ review }) => {
    return (
        <div>
            <div className="review-box">
                {review?.results.map((movie) => {
                    return (
                        <div className="movie-review">
                            <h3>{movie.author}</h3>
                            <p>{movie.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieReview;
