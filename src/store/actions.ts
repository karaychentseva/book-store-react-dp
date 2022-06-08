import { bookActions } from "./book/bookSlice";
import { bookmarksActions } from "./bookmarks/bookmarksSlice";
import { searchBooksActions } from "./search-books/searchBooksSlice";
import { newBooksActions } from "./new-books/newBooksSlice";
import { languageActions } from "./language/languageSlice";

const actions = {
    ...bookmarksActions,
    ...bookActions,
    ...searchBooksActions,
    ...newBooksActions,
    ...languageActions,
};

export default actions;