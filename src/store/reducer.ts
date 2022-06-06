import { bookmarksReducer } from "./bookmarks/bookmarksSlice";
import { bookReducer } from "./book/bookSlice";
import { searchBooksReducer } from "./search-books/searchBooksSlice";
import { newBooksReducer } from "./new-books/newBooksSlice";

const reducer = {
    bookmarks: bookmarksReducer,
    book: bookReducer,
    searchBooks: searchBooksReducer,
    newBooks: newBooksReducer,
};

export default reducer;
