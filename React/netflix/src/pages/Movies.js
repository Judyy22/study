import React, { useState, useEffect } from "react";
import MovieList from "../component/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/Actions/movieAction";
import Page from "../component/Page";
import { useLocation } from "react-router-dom";
import Header from "../component/Header";

const Movies = () => {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const { nowPlaymovies, searchMovie } = useSelector((state) => state.movie);
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(movieAction.getMovies(page));
    }, [page]);

    console.log("서치결과 갯수 샐라고 콘솔에 찍음", searchMovie);

    if (state !== null) {
        return (
            <div>
                <Header item={"검색결과"} />
                <div className="container">
                    <div>검색 결과 : {searchMovie.total_results}개</div>
                    <div className="row">
                        {searchMovie?.results.map((item) => (
                            <MovieList item={item} />
                        ))}
                    </div>
                    <Page
                        total={searchMovie?.total_results}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header item={"MOVIES"} />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {nowPlaymovies?.results.map((item) => (
                        <MovieList item={item} />
                    ))}
                </div>
                <Page
                    total={nowPlaymovies?.total_results}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};

export default Movies;
