import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SearchFilterType } from "../../types/SearchFilterType";
import { SearchResultType } from "../../types/SearchResultType";
import { searchBooks } from "./searchBooksThunk";

type StoreType = {
    filter: SearchFilterType,
    data: SearchResultType,
    pageTotal: number,
    loading: boolean,
    error: boolean,
    errorText: string
}

const initialState: StoreType = {
    filter: {
        page: 1,
        query: ''
    },
    data: {
        page: 1,
        total: 0,
        books: [],
    },
    pageTotal: 0,
    loading: false,
    error: false,
    errorText: '',
}

const searchBooksSlice = createSlice({
    name: "searchBooks",
    initialState,
    reducers: {
        setPage: (state, { payload: page }: PayloadAction<number>) => {
            state.filter.page = page;
        },
        setQuery: (state, { payload: query }: PayloadAction<string>) => {
            state.filter.query = query;
        }
    },
    extraReducers: builder => {
        builder.addCase(searchBooks.pending, (state) => {
            state.loading = true;
            state.error = false;
        });

        builder.addCase(searchBooks.rejected, (state, { payload } : PayloadAction<string | undefined>) => {
            state.loading = false;
            state.error = true;
            state.errorText = payload || '';
        });

        builder.addCase(searchBooks.fulfilled, (state, { payload } : PayloadAction<SearchResultType>) => {
            state.loading = false;
            state.error = false;
            state.data = payload;

            if (state.data.total > 1000) {
                state.pageTotal = 1000;
            } else {
                state.pageTotal = state.data.total;
            }
        });
    }
});

export const searchBooksReducer = searchBooksSlice.reducer;
export const searchBooksActions = {
    ...searchBooksSlice.actions,
    searchBooks,
};
