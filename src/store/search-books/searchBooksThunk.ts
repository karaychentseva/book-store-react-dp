import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/api';
import { SearchFilterType } from '../../types/SearchFilterType';
import { SearchResultType } from '../../types/SearchResultType';


export const searchBooks = createAsyncThunk<SearchResultType, SearchFilterType, { rejectValue: string }>(
    "book/search",
    async ({query, page}, thunkApi) => {
        try {
            const response = await api.get(`search/${query}/${page}`);
            return response.data as SearchResultType
        } catch {
            return thunkApi.rejectWithValue("Server error!!!");
        }
    }
)
