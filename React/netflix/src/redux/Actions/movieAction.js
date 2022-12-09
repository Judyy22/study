import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" });
            const populrMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            );

            const topRateApi = api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );

            const upComingApi = api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );

            let [popularMovies, topRatedMovies, upcomingMovies] =
                await Promise.all([populrMovieApi, topRateApi, upComingApi]);
            console.log(popularMovies);
            console.log(topRatedMovies);
            console.log(upcomingMovies);

            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

export const movieAction = { getMovies };
