import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookCardType } from "../../types/BookCardType";

type StoreType = {
    books: BookCardType[]
}

const initialState: StoreType = {
    books: []
}

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state, { payload: bookCard }: PayloadAction<BookCardType>) => {
            state.books.push(bookCard);
        },
        removeBookmark: (state, { payload: isbn13 }: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn13 != isbn13);
        },
    },
});

export const bookmarksReducer = bookmarksSlice.reducer;
export const bookmarksActions = bookmarksSlice.actions;