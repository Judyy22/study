import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieReview = ({ review }) => {
    return (
        <div>
            <div className="review-box">
                {review?.results.map((movie) => {
                    return (
                        <div>
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
