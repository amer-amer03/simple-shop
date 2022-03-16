import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer, { ICatalogState, initState as catalogState } from './reducers/catalog';
import modalReducer, { IModalState, initState as modalState } from './reducers/modal';
import authReducer, { IAuthState, initState as authState } from './reducers/auth';
import notificationReducer, { INotificationState, initState as notificationState } from './reducers/notification';
import cartReducer, { ICartState, initState as cartState } from './reducers/cart';
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface ISimpleShopState {
    catalog: ICatalogState
    modal: IModalState
    auth: IAuthState
    notification: INotificationState
    cart: ICartState
}

const initState: ISimpleShopState = {
    catalog: catalogState,
    modal: modalState,
    auth: authState,
    notification: notificationState,
    cart: cartState
};

const reducers = combineReducers({
    catalog: catalogReducer,
    modal: modalReducer,
    auth: authReducer,
    notification: notificationReducer,
    cart: cartReducer

});

const persistConfig = {
    key: "root",
    whitelist: ['auth', 'cart'],
    storage,
};

const middlewares = [thunk];

const persisted = persistReducer(persistConfig, reducers);

export const store = createStore(persisted, initState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
