import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BookCardType } from "../../types/BookCardType";
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

        builder.addCase(getNewBooks.rejected, (state, { payload } : PayloadAction<string | undefined>) => {
            state.loading = false;
            state.error = true;
            state.errorText = payload || '';
        });

        builder.addCase(getNewBooks.fulfilled, (state, { payload } : PayloadAction<NewBooksResultType>) => {
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
