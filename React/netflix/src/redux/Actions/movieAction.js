import api from "../api";
import { movieReducers } from "../reducers/movieReducer";

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
            const nowPlayingApi = api.get(
                `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
            );

            let [
                popularMovies,
                topRatedMovies,
                upcomingMovies,
                genreList,
                nowPlaymovies,
            ] = await Promise.all([
                populrMovieApi,
                topRateApi,
                upComingApi,
                genreApi,
                nowPlayingApi,
            ]);

            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    genreList: genreList.data.genres,
                    nowPlaymovies: nowPlaymovies.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

function getMovieDetails(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_DETAIL_REQUEST" });
            const movieDetilApi = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=en-US`
            );
            const movieReviewApi = api.get(
                `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
            );
            const relatedMovieApi = api.get(
                `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
            );
            const movieTrailerApi = api.get(
                `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
            );

            let [movieDetail, movieReviews, relatedMovie, movieTrailer] =
                await Promise.all([
                    movieDetilApi,
                    movieReviewApi,
                    relatedMovieApi,
                    movieTrailerApi,
                ]);
            dispatch({
                type: "GET_DETAIL_SUCCESS",
                payload: {
                    movieDetail: movieDetail.data,
                    movieReviews: movieReviews.data,
                    relatedMovie: relatedMovie.data,
                    movieTrailer: movieTrailer.data,
                },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

function getSearchMovie(search) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_SEARCH_REQUEST" });
            const searchMovieApi = api.get(
                `search/movie?api_key=${API_KEY}&language=en-US&page=1&&query=${search}`
            );

            let [searchMovie] = await Promise.all([searchMovieApi]);
            dispatch({
                type: "GET_SEARCH_SUCCESS",
                payload: { searchMovie: searchMovie.data },
            });
        } catch (error) {
            //에러 핸들링
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }
    };
}

export const movieAction = {
    getMovies,
    getMovieDetails,
    getSearchMovie,
};
