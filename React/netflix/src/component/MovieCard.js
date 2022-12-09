import React from "react";

const MovieCard = ({ item }) => {
    return (
        <div
            className="card"
            style={{
                backgroundImage:
                    "url(" +
                    `https://www.themoviedb.org/t/p/w335_and_h200_multi_faces${item.poster_path}` +
                    ")",
            }}
        >
            MovieCard
        </div>
    );
};

export default MovieCard;
