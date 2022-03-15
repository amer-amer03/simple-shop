import { Action, ActionCreator, Dispatch } from "redux";
import { getCatalogData } from "../../api/catalog";
import { ICatalogData, ICatalogDataResults } from "../../typescript/interfaces/catalog";

export enum CatalogDataTypes {
    LOADING_CATALOGDATA_REQUEST = 'LOADING_CATALOGDATA_REQUEST',
    LOADING_CATALOGDATA_SUCCESS = 'LOADING_CATALOGDATA_SUCCESS',
    LOADING_CATALOGDATA_ERROR = 'LOADING_CATALOGDATA_ERROR',
}
export interface ICatalogAction extends Action {
    catalogData: ICatalogDataResults[];
}

const loadingCatalogDataRequest: ActionCreator<Action> = () => {
    return { type: CatalogDataTypes.LOADING_CATALOGDATA_REQUEST }
}

const loadingCatalogDataSuccess: ActionCreator<Action> = (catalogData: ICatalogData) => {
    return { type: CatalogDataTypes.LOADING_CATALOGDATA_SUCCESS, catalogData }
}

// const loadingBaseInfoError: ActionCreator<Action> = () => {  
//     return { type: CatalogDataTypes.LOADING_CATALOGDATA_ERROR };
// };


export const loadingCatalogData = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loadingCatalogDataRequest())
        try {
            const catalogData = await getCatalogData();
            dispatch(loadingCatalogDataSuccess(catalogData))
        } catch (e) {
            // dispatchError(dispatch, e, loadingCatalogDataError)
            console.log("failed to load")
        }
    }
} 