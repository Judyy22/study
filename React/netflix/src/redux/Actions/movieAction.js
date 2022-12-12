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

            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );

            let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
                await Promise.all([
                    populrMovieApi,
                    topRateApi,
                    upComingApi,
                    genreApi,
                ]);
            console.log("장르 리스트?", genreList);

            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

export const movieAction = { getMovies };
