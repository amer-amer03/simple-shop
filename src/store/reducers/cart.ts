import { ICatalogDataResults } from "../../interfaces/catalog";
import { CartTypes, ICartAction } from "../actions/cart";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem, setTotalPrice, toggleSpecs } from "./utils";

export interface ICartState {
    cart: ICatalogDataResults[]
    totalPrice: number
}

export const initState: ICartState = {
    cart: [],
    totalPrice: 0
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
            const updatedItems = toggleSpecs(state.cart, action.item, action.selectedSpec);
            return {
                ...state,
                cart: updatedItems,
            };
        }
        case CartTypes.SET_TOTAL_PRICE: {
            const updatedItems = setTotalPrice(state.cart, action.itemId, action.totalPrice);
            return {
                ...state,
                cart: updatedItems,
            };
        }
        case CartTypes.SET_CART_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.cartTotalPrice,
            };
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

export default cartReducer