import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookCardType } from "../../types/BookCardType";

type StoreType = {
    books: BookCardType[]
}

let storedBooks : BookCardType[] = [];
try {
    storedBooks = JSON.parse(localStorage.getItem('bookmarks') || '[]') as BookCardType[];
}
catch {
    localStorage.setItem('bookmarks', '[]');
}

const initialState: StoreType = {
    books: storedBooks,
}

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark: (state, { payload: bookCard }: PayloadAction<BookCardType>) => {
            state.books.push(bookCard);
            localStorage.setItem('bookmarks', JSON.stringify(state.books));
        },
        removeBookmark: (state, { payload: isbn13 }: PayloadAction<string>) => {
            state.books = state.books.filter(book => book.isbn13 != isbn13);
            localStorage.setItem('bookmarks', JSON.stringify(state.books));
        },
    },
});

export const bookmarksReducer = bookmarksSlice.reducer;
export const bookmarksActions = bookmarksSlice.actions;