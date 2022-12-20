const initialState = {
    boardList: [],
    keyword: "",
};
const boardReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "ADD_CONTACT":
            state.boardList.push({
                name: payload.name,
                content: payload.content,
                movieTitle: payload.movieTitle,
            });
            break;
        case "SEARCH_BY_USERNAME":
            state.keyword = payload.keyword;
            break;
    }

    return { ...state };
};

export default boardReducer;
