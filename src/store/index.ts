import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import catalogReducer, { ICatalogState, initState as catalogState } from './reducers/catalog';
import modalReducer, { IModalState, initState as modalState } from './reducers/modal';

export interface ISimpleShopState {
    catalog: ICatalogState
    modal: IModalState
}

const initState: ISimpleShopState = {
    catalog: catalogState,
    modal: modalState
};

const reducers = combineReducers({
    catalog: catalogReducer,
    modal: modalReducer
});

const middlewares = [thunk];

const store = createStore(reducers, initState, applyMiddleware(...middlewares));
export default store; 