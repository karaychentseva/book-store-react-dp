import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/api';
import { NewBooksResultType } from '../../types/NewBooksResultType';


export const getNewBooks = createAsyncThunk<NewBooksResultType, undefined, { rejectValue: string }>(
    "book/new",
    async (_, thunkApi) => {
        try {
            const response = await api.get(`new`);
            return response.data as NewBooksResultType
        } catch {
            return thunkApi.rejectWithValue("Server error!!!");
        }
    }
)
