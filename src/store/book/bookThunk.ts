import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../helpers/api';
import { BookDetailsType } from "../../types/BookDetailsType";


export const fetchBook = createAsyncThunk<BookDetailsType, string, { rejectValue: string }>(
    "book/fetchBook",
    async (isbn13, thunkApi) => {
        try {
            const response = await api.get(`books/${isbn13}`);
            return response.data as BookDetailsType
        } catch {
            return thunkApi.rejectWithValue("Server error!!!");
        }
    }
)
