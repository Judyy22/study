let initialState = {
    populrMovies: {},
    topRatedMovies: {},
    upcomingMovies: {},
};

function movieReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_MOVIES_SUCCESS":
            return {
                ...state,
                populrMovies: payload.populrMovies,
                topRatedMovies: payload.topRatedMovies,
                upcomingMovies: payload.upcomingMovies,
            };
        default:
            return { ...state };
    }
}

export default movieReducer;
