import { Action } from "@reduxjs/toolkit";
import { ThemeTypes } from "../actions/theme";

export interface IThemeState {
    isDarkTheme: boolean,
}

export const initState: IThemeState = {
    isDarkTheme: false
};

function themeReducer(state = initState, action: Action): IThemeState {
    switch (action.type) {
        case ThemeTypes.TOGGLE_THEME:
            return { ...state, isDarkTheme: !state.isDarkTheme }
    }
    return state
}

export default themeReducer
