import { createSlice } from "@reduxjs/toolkit"

type StoreType = {
    count: number,
}

const initialState: StoreType = {
    count: 0,
}

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state) => {
            state.count++;
        },
        removeBookmark: (state) => {
            state.count--;
        },
    },
});

export const bookmarksReducer = bookmarksSlice.reducer;
export const bookmarksActions = bookmarksSlice.actions;