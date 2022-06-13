import { bookmarksReducer } from "./bookmarks/bookmarksSlice";
import { bookReducer } from "./book/bookSlice";
import { searchBooksReducer } from "./search-books/searchBooksSlice";
import { newBooksReducer } from "./new-books/newBooksSlice";
import { languageReducer } from "./language/languageSlice";
import { themeReducer } from "./theme/themeSlice";

const reducer = {
    bookmarks: bookmarksReducer,
    book: bookReducer,
    searchBooks: searchBooksReducer,
    newBooks: newBooksReducer,
    language: languageReducer,
    theme: themeReducer,
};

export default reducer;
