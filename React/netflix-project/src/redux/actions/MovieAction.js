import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch) => {
        const popularMovieApi = api.get(
            `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );

        const topRatedApi = api.get(
            `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        const upComingApi = api.get(
            `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );

        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all(
            [popularMovieApi, topRatedApi, upComingApi]
        );

        console.log(popularMovies);

        dispatch({
            type: "GET_MOVIES_SUCCESS",
            payload: {
                popularMovies: popularMovies.data,
                topRatedMovies: topRatedMovies.data,
                upcomingMovies: upcomingMovies.data,
            },
        });

        // let url = `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1`;
        // let response = await fetch(url);
        // let data = await response.json();
    };
}

export const movieAction = {
    getMovies,
};
