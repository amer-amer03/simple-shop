import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { IThemeState } from "../reducers/theme";

const getState = (state: ISimpleShopState): IThemeState => state.theme

export const isDarkThemeSelector = createSelector([getState], (state) => state.isDarkTheme)
