import { bookActions } from "./book/bookSlice";
import { bookmarksActions } from "./bookmarks/bookmarksSlice";

const actions = {
    ...bookmarksActions,
    ...bookActions,
};

export default actions;