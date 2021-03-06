import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookDetailsType } from "../../types/BookDetailsType";
import { fetchBook } from "./bookThunk";

type StoreType = {
    data: BookDetailsType,
    loading: boolean,
    error: boolean
}

const initialState: StoreType = {
    data: {
        error: '',
        title: '',
        subtitle: '',
        authors: '',
        publisher: '',
        isbn10: '',
        isbn13: '',
        pages: '',
        year: '',
        rating: '',
        desc: '',
        price: '',
        image: '',
        url: '',
    },
    loading: true,
    error: false,
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchBook.pending, (state) => {
            state.loading = true;
            state.error = false;
        });

        builder.addCase(fetchBook.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });

        builder.addCase(fetchBook.fulfilled, (state, { payload } : PayloadAction<BookDetailsType>) => {
            state.loading = false;
            state.error = false;
            state.data = payload;
        });
    }
});

export const bookReducer = bookSlice.reducer;
export const bookActions = {
    ...bookSlice.actions,
    fetchBook,
};
