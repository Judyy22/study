let initialState = {
    popularMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
    loading: true,
    genreList: [],
    movieDetail: null,
    movieReviews: null,
    relatedMovie: null,
    movieTrailer: null,
};

function movieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_MOVIES_SUCCESS":
            return {
                ...state,
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
                genreList: payload.genreList,
                loading: false,
                nowPlaymovies: payload.nowPlaymovies,
            };
        case "GET_MOVIES_REQUEST":
            return { ...state, loading: true };
        case "GET_MOVIES_FAILURE":
            return { ...state, loading: false };
        case "GET_DETAIL_SUCCESS":
            return {
                ...state,
                movieDetail: payload.movieDetail,
                movieReviews: payload.movieReviews,
                relatedMovie: payload.relatedMovie,
                movieTrailer: payload.movieTrailer,
            };
        default:
            return { ...state };
    }
}

export default movieReducer;
