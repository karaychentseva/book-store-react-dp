import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Themes } from "../../enums/themes";

type StoreType = {
    theme: string
}

let theme : string = Themes.white;

try {
    theme = localStorage.getItem('theme') || Themes.white;
}
catch {
    localStorage.setItem('theme', Themes.white);
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