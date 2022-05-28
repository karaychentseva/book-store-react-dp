import { combineReducers } from "redux";
import { bookmarksReducer } from "./bookmarks/bookmarksSlice";

const reducer = combineReducers({
    bookmarks: bookmarksReducer,
});

export default reducer;
