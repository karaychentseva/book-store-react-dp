import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type StoreType = {
    theme: string
}

let theme : string = "en";

try {
    theme = localStorage.getItem('theme') || 'en';
}
catch {
    localStorage.setItem('theme', 'en');
}

const initialState: StoreType = {
    theme: theme,
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, { payload: theme }: PayloadAction<string>) => {
            state.theme = theme;
            localStorage.setItem('theme', theme);
            document.body.dataset.theme = state.theme;
        }
    },
});

export const themeReducer = themeSlice.reducer;
export const themeActions = themeSlice.actions;