import { Action, ActionCreator, Dispatch } from "redux";
import { getCatalogData } from "../../api/catalog";
import { ICatalogDataResults } from "../../interfaces/catalog";

export enum CatalogDataTypes {
    LOADING_CATALOGDATA_REQUEST = 'LOADING_CATALOGDATA_REQUEST',
    LOADING_CATALOGDATA_SUCCESS = 'LOADING_CATALOGDATA_SUCCESS',
    LOADING_CATALOGDATA_ERROR = 'LOADING_CATALOGDATA_ERROR',
}
export interface ICatalogAction extends Action {
    payload: ICatalogDataResults[];
}

const loadingCatalogDataRequest: ActionCreator<Action> = () => {
    return { type: CatalogDataTypes.LOADING_CATALOGDATA_REQUEST }
}

const loadingCatalogDataSuccess: ActionCreator<ICatalogAction> = (catalogData: ICatalogDataResults[]): ICatalogAction => {
    return { type: CatalogDataTypes.LOADING_CATALOGDATA_SUCCESS, payload: catalogData }
}

export const loadingCatalogData = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loadingCatalogDataRequest())
        try {
            const catalogData = await getCatalogData();
            dispatch(loadingCatalogDataSuccess(catalogData))
        } catch (e) {
            console.log("failed to load")
        }
    }
}
