import { bookmarksReducer } from "./bookmarks/bookmarksSlice";
import { bookReducer } from "./book/bookSlice";
import { searchBooksReducer } from "./search-books/searchBooksSlice";

const reducer = {
    bookmarks: bookmarksReducer,
    book: bookReducer,
    searchBooks: searchBooksReducer,
};

export default reducer;
