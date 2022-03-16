import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { ICartState } from "../reducers/cart";

const getState = (state: ISimpleShopState): ICartState => state.cart

export const cartDataSelector = createSelector([getState], (state) => state.cart)
