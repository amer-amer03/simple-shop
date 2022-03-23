import { ICatalogDataResults } from "../../interfaces/catalog";

export const increaseCartItemQuantity = (allCartItems: ICatalogDataResults[], currentCartItem: ICatalogDataResults) => {
    let updatedItems: ICatalogDataResults[] = [];
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
    let updatedItems: ICatalogDataResults[] = [];
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

export const toggleSpecs = (allCartItems: ICatalogDataResults[], currentCartItem: ICatalogDataResults, selectedSpec: string) => {
    const selectedItem = allCartItems.find((cartItem) => cartItem.id === currentCartItem.id);

    const updatedSpecs = selectedItem?.specs.map((spec) => {
        return spec.title === selectedSpec ?
            { ...spec, checked: !spec.checked }
            : spec
    });

    let updatedItems: ICatalogDataResults[] = [];

    updatedItems = allCartItems.map((cartItem) => {
        return cartItem.id === currentCartItem.id
            ? {
                ...cartItem,
                specs: updatedSpecs ? updatedSpecs : cartItem.specs
            }
            : cartItem;

    });
    return updatedItems;
};

export const setTotalPrice = (allCartItems: ICatalogDataResults[], itemId: number, totalPrice: number) => {
    let updatedItems: ICatalogDataResults[] = [];

    updatedItems = allCartItems.map((cartItem) => {
        return cartItem.id === itemId
            ? { ...cartItem, totalPrice: totalPrice }
            : cartItem;
    });
    return updatedItems;
};