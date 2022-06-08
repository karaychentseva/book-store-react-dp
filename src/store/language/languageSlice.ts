import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type StoreType = {
    language: string
}

let language : string = "en";

try {
    language = localStorage.getItem('language') || 'en';
}
catch {
    localStorage.setItem('language', 'en');
}

const initialState: StoreType = {
    language: language,
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, { payload: language }: PayloadAction<string>) => {
            state.language = language;
            localStorage.setItem('language', language);
        }
    },
});

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;