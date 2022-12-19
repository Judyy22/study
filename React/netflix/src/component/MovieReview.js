import React, { useState } from "react";

const MovieReview = ({ review }) => {
    return (
        <div>
            <div className="review-box">
                {review?.results.map((movie) => {
                    return (
                        <div className="movie-review">
                            <div>{movie.author}</div>
                            <div>{movie.content}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieReview;
