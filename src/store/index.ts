import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import catalogReducer, { ICatalogState, initState as catalogState } from './reducers/catalog';
import modalReducer, { IModalState, initState as modalState } from './reducers/modal';
import authReducer, { IAuthState, initState as authState } from './reducers/auth';
import notificationReducer, { INotificationState, initState as notificationState } from './reducers/notification';
import cartReducer, { ICartState, initState as cartState } from './reducers/cart';
import themeReducer, { IThemeState, initState as themeState } from './reducers/theme';
import storage from "redux-persist/lib/storage";

export interface ISimpleShopState {
    catalog: ICatalogState
    modal: IModalState
    auth: IAuthState
    notification: INotificationState
    cart: ICartState
    theme: IThemeState
}

const initState: ISimpleShopState = {
    catalog: catalogState,
    modal: modalState,
    auth: authState,
    notification: notificationState,
    cart: cartState,
    theme: themeState
};

const reducers = combineReducers({
    catalog: catalogReducer,
    modal: modalReducer,
    auth: authReducer,
    notification: notificationReducer,
    cart: cartReducer,
    theme: themeReducer
});

const persistConfig = {
    key: "root",
    whitelist: ['auth', 'cart', 'theme'],
    storage,
};

const middlewares = [thunk];

const persisted = persistReducer(persistConfig, reducers);

export const store = createStore(persisted, initState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
