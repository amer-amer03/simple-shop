import { ICatalogDataResults, ISpecs } from "../../interfaces/catalog";

export const increaseCartItemQuantity = (allCartItems: ICatalogDataResults[], currentCartItem: ICatalogDataResults) => {
    let updatedItems = [];
    const itemExist = allCartItems.find((cartItem) => {
        return cartItem.id === currentCartItem.id;
    });
    if (itemExist) {
        updatedItems = allCartItems.map((cartItem) => {
            return cartItem.id === currentCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity && cartItem.quantity + 1 }
                : cartItem;
        });
    } else {
        updatedItems = [...allCartItems, { ...currentCartItem, quantity: 1 }];
    }
    return updatedItems;
};

export const removeCartItem = (allCartItems: ICatalogDataResults[], currentCartItem: ICatalogDataResults) => {
    return allCartItems.filter((cartItem) => cartItem.id !== currentCartItem.id);
};

export const decreaseCartItemQuantity = (allCartItems: ICatalogDataResults[], currentCartItem: ICatalogDataResults) => {
    let updatedItems = [];
    const itemExist = allCartItems.find((cartItem) => {
        return cartItem.id === currentCartItem.id;
    });
    if (itemExist?.quantity === 1) {
        updatedItems = removeCartItem(allCartItems, currentCartItem);
    } else {
        updatedItems = allCartItems.map((cartItem) => {
            return cartItem.id === currentCartItem.id
                ? { ...cartItem, quantity: cartItem.quantity && cartItem.quantity - 1 }
                : cartItem;
        });
    }
    return updatedItems;
};

export const toggleSpecs = (allCartItems: ICatalogDataResults[], selectedSpec: string, currentCartItem: ICatalogDataResults) => {
    let updatedItems = [];
    const itemExist = allCartItems.find((cartItem) => {
        return cartItem.id === currentCartItem.id;
    });

    updatedItems = allCartItems.map((cartItem) => {
        return cartItem.id === currentCartItem.id && console.log(cartItem.specs);
    });

    // updatedItems = allCartItems.map((cartItem) => {
    //     return cartItem.id === currentCartItem.id
    //         ? { ...cartItem, quantity: cartItem.quantity && cartItem.quantity - 1 }
    //         : cartItem;
    // });
    return allCartItems;
};