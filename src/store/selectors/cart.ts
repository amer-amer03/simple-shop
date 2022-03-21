import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { ICartState } from "../reducers/cart";

const getState = (state: ISimpleShopState): ICartState => state.cart

export const cartDataSelector = createSelector([getState], (state) => state.cart)
export const cartTotalPriceSelector = createSelector([getState], (state) => state.totalPrice)

export const cartItemsQuantitySelector = createSelector(
    [cartDataSelector],
    (cartItems) =>
        cartItems.reduce((quantity, item) => item.quantity ? item.quantity + quantity : 0, 0)
);