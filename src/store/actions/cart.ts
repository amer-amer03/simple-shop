import { Action, ActionCreator } from "@reduxjs/toolkit";
import { ICatalogDataResults } from "../../interfaces/catalog";

export enum CartTypes {
    INCREASE_CART_ITEM = 'ADD_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    CLEAR_CART = 'CLEAR_CART',
    DECREASE_CART_ITEM = 'DECREASE_CART_ITEM',
    TOGGLE_SPECS = 'TOGGLE_SPECS',
    SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
    SET_CART_TOTAL_PRICE = 'SET_CART_TOTAL_PRICE'
}

export interface ICartAction extends Action {
    item?: ICatalogDataResults;
    itemId?: number;
    selectedSpec?: string;
    totalPrice?: number;
    cartTotalPrice?: number
}

export const increaseCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults) => {
    return { type: CartTypes.INCREASE_CART_ITEM, item };
};

export const decreaseCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults) => {
    return { type: CartTypes.DECREASE_CART_ITEM, item };
};

export const removeCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults) => {
    return { type: CartTypes.REMOVE_CART_ITEM, item };
};

export const clearCart: ActionCreator<ICartAction> = () => {
    return { type: CartTypes.CLEAR_CART };
};

export const toggleSpecs: ActionCreator<ICartAction> = (item: ICatalogDataResults, selectedSpec: string) => {
    return { type: CartTypes.TOGGLE_SPECS, item, selectedSpec };
};

export const setTotalItemPrice: ActionCreator<ICartAction> = (itemId: number, totalPrice: number) => {
    return { type: CartTypes.SET_TOTAL_PRICE, itemId, totalPrice };
};

export const setCartTotal: ActionCreator<ICartAction> = (cartTotalPrice: number) => {
    return { type: CartTypes.SET_CART_TOTAL_PRICE, cartTotalPrice };
};