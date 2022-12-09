import React from "react";

const MovieCard = ({ item }) => {
    return (
        <div
            className="card"
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` +
                    ")",
            }}
        >
            MovieCard
        </div>
    );
};

export default MovieCard;
