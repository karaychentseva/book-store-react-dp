import { createSlice } from "@reduxjs/toolkit"
import { NewBooksResultType } from "../../types/NewBooksResultType";
import { getNewBooks } from "./newBooksThunk";

type StoreType = {
    data: NewBooksResultType,
    loading: boolean,
    error: boolean,
    errorText: string
}

const initialState: StoreType = {
    data: {
        total: 0,
        books: [],
    },
    loading: false,
    error: false,
    errorText: '',
}

const newBooksSlice = createSlice({
    name: "newBooks",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getNewBooks.pending, (state) => {
            state.loading = true;
            state.error = false;
        });

        builder.addCase(getNewBooks.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = true;
            state.errorText = payload || '';
        });

        builder.addCase(getNewBooks.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.error = false;
            state.data = payload;
        });
    }
});

export const newBooksReducer = newBooksSlice.reducer;
export const newBooksActions = {
    ...newBooksSlice.actions,
    getNewBooks,
};
