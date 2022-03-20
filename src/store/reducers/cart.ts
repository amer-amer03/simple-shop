import { ICatalogDataResults } from "../../interfaces/catalog";
import { CartTypes, ICartAction } from "../actions/cart";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem, toggleSpecs } from "./utils";

export interface ICartState {
    cart: ICatalogDataResults[]
}

export const initState: ICartState = {
    cart: []
}

function cartReducer(state = initState, action: ICartAction): ICartState {
    switch (action.type) {
        case CartTypes.INCREASE_CART_ITEM: {
            const updatedItems = increaseCartItemQuantity(
                state.cart,
                action.item
            );
            return {
                ...state,
                cart: updatedItems
            }
        }
        case CartTypes.DECREASE_CART_ITEM: {
            const updatedItems = decreaseCartItemQuantity(
                state.cart,
                action.item
            );
            return {
                ...state,
                cart: updatedItems,
            };
        }
        case CartTypes.REMOVE_CART_ITEM: {
            const updatedItems = removeCartItem(state.cart, action.item);
            return {
                ...state,
                cart: updatedItems,
            };
        }
        case CartTypes.TOGGLE_SPECS: {
            const updatedItems = toggleSpecs(state.cart, action.selectedSpec, action.item);
            return {
                ...state,
                cart: updatedItems,
            };
        }
    }
    return state
}

export default cartReducer