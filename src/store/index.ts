import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer, { ICatalogState, initState as catalogState } from './reducers/catalog';
import modalReducer, { IModalState, initState as modalState } from './reducers/modal';
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface ISimpleShopState {
    catalog: ICatalogState
    modal: IModalState
}

const initState: ISimpleShopState = {
    catalog: catalogState,
    modal: modalState
};


const persistConfig = {
    key: "root",
    storage,
};
const reducers = combineReducers({
    catalog: catalogReducer,
    modal: modalReducer
});

const middlewares = [thunk];

const persisted = persistReducer(persistConfig, reducers);

export const store = createStore(persisted, initState, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
