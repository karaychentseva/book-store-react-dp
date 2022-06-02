import { bookActions } from "./book/bookSlice";
import { bookmarksActions } from "./bookmarks/bookmarksSlice";
import { searchBooksActions } from "./search-books/searchBooksSlice";

const actions = {
    ...bookmarksActions,
    ...bookActions,
    ...searchBooksActions
};

export default actions;