import React, { useState, useEffect } from "react";
import MovieList from "../component/MovieList";
import SideBar from "../component/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/Actions/movieAction";
import Page from "../component/Page";

const Movies = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);

    console.log("이게 되나?", searchMovie);
    console.log("어........", nowPlaymovies);

    useEffect(() => {
        dispatch(movieAction.getMovies(page));
    }, [keyword[0]]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <SideBar />
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        {nowPlaymovies.results.map((item) => (
                            <MovieList item={item} />
                        ))}
                    </div>
                </div>
                <Page
                    total={nowPlaymovies.total_results}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    );
};

export default Movies;
