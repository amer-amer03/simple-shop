import { Action } from "@reduxjs/toolkit";
import { ICatalogDataResults } from "../../interfaces/catalog";
import { combineReducers } from "../../utils/helpers/redux";
import { CartTypes, ICartAction, ICartItemAction, ICartTotalAction, ISpecsAction } from "../actions/cart";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem, setTotalPrice, toggleSpecs } from "./utils";

export interface ICartState {
    cart: ICatalogDataResults[]
    totalPrice: number
}

export const initState: ICartState = {
    cart: [],
    totalPrice: 0
}

function cartItemsReducer(state = initState, action: ICartAction): ICartState {
    switch (action.type) {
        case CartTypes.INCREASE_CART_ITEM: {
            if (action.payload) {
                const updatedItems = increaseCartItemQuantity(
                    state.cart,
                    action.payload
                );
                return {
                    ...state,
                    cart: updatedItems
                }
            } else return { ...state };
        }
        case CartTypes.DECREASE_CART_ITEM: {
            if (action.payload) {
                const updatedItems = decreaseCartItemQuantity(
                    state.cart,
                    action.payload
                );
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }
        case CartTypes.REMOVE_CART_ITEM: {
            if (action.payload) {
                const updatedItems = removeCartItem(state.cart, action.payload);
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }

        case CartTypes.CLEAR_CART: {
            return {
                ...state,
                cart: [],
            };
        }
    }
    return state
}


function cartSpecsReducer(state = initState, action: ISpecsAction): ICartState {
    switch (action.type) {
        case CartTypes.TOGGLE_SPECS: {
            const updatedItems = toggleSpecs(state.cart, action.payload.item, action.payload.selectedSpec);
            return {
                ...state,
                cart: updatedItems,
            };
        }
    }  return state
}

function cartItemPriceReducer(state = initState, action: ICartItemAction): ICartState {
    switch (action.type) {
        case CartTypes.SET_TOTAL_PRICE: {
            const updatedItems = setTotalPrice(state.cart, action.payload.itemId, action.payload.totalPrice);
            return {
                ...state,
                cart: updatedItems,
            };
        }
    }  return state
}
function cartTotalPriceReducer(state = initState, action: ICartTotalAction): ICartState {
    switch (action.type) {
        case CartTypes.SET_CART_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload,
            };
        }
    }  return state
}

const cartReducer = (state: ICartState, action: Action) =>
    combineReducers(
        state,
        action,
        cartSpecsReducer,
        cartItemPriceReducer,
        cartTotalPriceReducer,
        cartItemsReducer
    );
export default cartReducer;
