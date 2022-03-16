import { Action } from "@reduxjs/toolkit";
import { ICatalogDataResults } from "../../interfaces/catalog";

export enum CartTypes {
    INCREASE_CART_ITEM = 'ADD_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    DECREASE_CART_ITEM = 'DECREASE_CART_ITEM'
}

export interface ICartAction extends Action {
    item: ICatalogDataResults;
}
export const increaseCartItem = (item: ICatalogDataResults) => {
    return { type: CartTypes.INCREASE_CART_ITEM, item };
};

export const decreaseCartItem = (item: ICatalogDataResults) => {
    return { type: CartTypes.DECREASE_CART_ITEM, item };
};

export const removeCartItem = (item: ICatalogDataResults) => {
    return { type: CartTypes.REMOVE_CART_ITEM, item };
};