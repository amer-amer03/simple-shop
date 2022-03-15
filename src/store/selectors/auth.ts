import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { IAuthState } from "../reducers/auth";

const getState = (state: ISimpleShopState): IAuthState => state.auth

export const authUserSelector = createSelector([getState], (state) => state.userData)
export const authIsLoginSelector = createSelector([getState], (state) => state.isLogin)

