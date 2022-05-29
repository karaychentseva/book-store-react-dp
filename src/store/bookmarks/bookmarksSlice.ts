import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type StoreType = {
    books: string[]
}

const initialState: StoreType = {
    books: []
}

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state, { payload: isbn13 }: PayloadAction<string>) => {
            state.books.push(isbn13);
        },
        removeBookmark: (state, { payload: isbn13 }: PayloadAction<string>) => {
            state.books = state.books.filter(book => book != isbn13);
        },
    },
});

export const bookmarksReducer = bookmarksSlice.reducer;
export const bookmarksActions = bookmarksSlice.actions;