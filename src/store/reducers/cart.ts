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
            if (action.item) {
                const updatedItems = increaseCartItemQuantity(
                    state.cart,
                    action.item
                );
                return {
                    ...state,
                    cart: updatedItems
                }
            } else return { ...state };
        }
        case CartTypes.DECREASE_CART_ITEM: {
            if (action.item) {
                const updatedItems = decreaseCartItemQuantity(
                    state.cart,
                    action.item
                );
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }
        case CartTypes.REMOVE_CART_ITEM: {
            if (action.item) {
                const updatedItems = removeCartItem(state.cart, action.item);
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }
        case CartTypes.TOGGLE_SPECS: {
            if (action.item && action.selectedSpec) {
                const updatedItems = toggleSpecs(state.cart, action.item, action.selectedSpec);
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }
        case CartTypes.SET_TOTAL_PRICE: {
            if (action.itemId && action.totalPrice) {
                const updatedItems = setTotalPrice(state.cart, action.itemId, action.totalPrice);
                return {
                    ...state,
                    cart: updatedItems,
                };
            } else return { ...state };
        }
        case CartTypes.SET_CART_TOTAL_PRICE: {

            return {
                ...state,
                totalPrice: action.cartTotalPrice ? action.cartTotalPrice : state.totalPrice,
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