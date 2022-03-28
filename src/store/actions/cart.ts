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
    payload: ICatalogDataResults;
}

export interface ISpecsAction extends Action {
    payload: { item: ICatalogDataResults, selectedSpec: string };
}
export interface ICartItemAction extends Action {
    payload: { itemId: number, totalPrice: number }
}
export interface ICartTotalAction extends Action {
    payload: number;

}

export const increaseCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults): ICartAction => {
    return { type: CartTypes.INCREASE_CART_ITEM, payload: item };
};

export const decreaseCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults) => {
    return { type: CartTypes.DECREASE_CART_ITEM, payload: item };
};

export const removeCartItem: ActionCreator<ICartAction> = (item: ICatalogDataResults) => {
    return { type: CartTypes.REMOVE_CART_ITEM, payload: item };
};

export const clearCart: ActionCreator<Action> = (): Action => {
    return { type: CartTypes.CLEAR_CART };
};

export const toggleSpecs: ActionCreator<ISpecsAction> = (item: ICatalogDataResults, selectedSpec: string): ISpecsAction => {
    return { type: CartTypes.TOGGLE_SPECS, payload: { item, selectedSpec } };
};

export const setTotalItemPrice: ActionCreator<ICartItemAction> = (itemId: number, totalPrice: number): ICartItemAction => {
    return { type: CartTypes.SET_TOTAL_PRICE, payload: { itemId, totalPrice } };
};

export const setCartTotal: ActionCreator<ICartTotalAction> = (cartTotalPrice: number): ICartTotalAction => {
    return { type: CartTypes.SET_CART_TOTAL_PRICE, payload: cartTotalPrice };
};