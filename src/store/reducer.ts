import { bookmarksReducer } from "./bookmarks/bookmarksSlice";
import { bookReducer } from "./book/bookSlice";

const reducer = {
    bookmarks: bookmarksReducer,
    book: bookReducer
};

export default reducer;
