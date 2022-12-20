import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import movieReducer from "./movieReducer";

export default combineReducers({
    movie: movieReducer,
    board: boardReducer,
});
