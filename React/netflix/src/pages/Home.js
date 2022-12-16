import React, { useEffect } from "react";
import { movieAction } from "../redux/Actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import MovieSlide from "../component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
    const dispatch = useDispatch();
    const { popularMovies, topRatedMovies, upcomingMovies, loading } =
        useSelector((state) => state.movie);
    console.log("populatmoviessssss", popularMovies);

    useEffect(() => {
        dispatch(movieAction.getMovies());
    }, []);

    // loading이 true면 loading 스피너를 보여주고
    // loading이 false면 데이터를 보여준다

    //true : 데이터 도착 전
    //false : 데이터 도착 후, 에러가 났을 때

    if (loading) {
        return <ClipLoader color="black" loading={loading} size={150} />;
    }
    return (
        <div className="home-card">
            {<Banner movie={popularMovies.results[0]} />}
            <h1>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1>Upcoming Movie</h1>
            <MovieSlide movies={upcomingMovies} />
        </div>
    );
};

export default Home;
