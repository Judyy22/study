import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieReview = ({ review }) => {
    return (
        <div>
            <div className="review-box">
                {review?.results.map((movie) => console.log("dddd", movie.id))}
            </div>
        </div>
    );
};

export default MovieReview;
