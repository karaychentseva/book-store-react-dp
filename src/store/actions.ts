import { bookActions } from "./book/bookSlice";
import { bookmarksActions } from "./bookmarks/bookmarksSlice";
import { searchBooksActions } from "./search-books/searchBooksSlice";
import { newBooksActions } from "./new-books/newBooksSlice";
import { languageActions } from "./language/languageSlice";
import { themeActions } from "./theme/themeSlice";

const actions = {
    ...bookmarksActions,
    ...bookActions,
    ...searchBooksActions,
    ...newBooksActions,
    ...languageActions,
    ...themeActions,
};

export default actions;