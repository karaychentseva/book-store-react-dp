import { combineReducers } from "redux";
import { bookmarksReducer } from "./bookmarks/bookmarksSlice";
import { bookReducer } from "./book/bookSlice";

const reducer = combineReducers({
    bookmarks: bookmarksReducer,
    book: bookReducer
});

export default reducer;
