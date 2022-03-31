import { Action, ActionCreator } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces/auth";

export enum ThemeTypes {
    TOGGLE_THEME = 'TOGGLE_THEME',
}

export const toggleTheme: ActionCreator<Action> = (): Action => {
    return { type: ThemeTypes.TOGGLE_THEME }
}