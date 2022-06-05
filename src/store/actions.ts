import { bookActions } from "./book/bookSlice";
import { bookmarksActions } from "./bookmarks/bookmarksSlice";
import { searchBooksActions } from "./search-books/searchBooksSlice";
import { newBooksActions } from "./new-books/newBooksSlice";

const actions = {
    ...bookmarksActions,
    ...bookActions,
    ...searchBooksActions,
    ...newBooksActions
};

export default actions;