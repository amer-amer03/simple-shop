import { ICatalogData } from "../../typescript/interfaces/catalog";
import { CatalogDataTypes, ICatalogAction } from "../actions/catalog";

export interface ICatalogState {
    catalogData: ICatalogData,
    isLoading: boolean
}

export const initState: ICatalogState = {
    catalogData: {
        results: []
    },
    isLoading: false,
};
function catalogReducer(state = initState, action: ICatalogAction): ICatalogState {
    switch (action.type) {
        case CatalogDataTypes.LOADING_CATALOGDATA_REQUEST:
            return { ...state, isLoading: true };
        case CatalogDataTypes.LOADING_CATALOGDATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                catalogData: {
                    ...state.catalogData.results,
                    results: action.catalogData ? action.catalogData : []
                },
            };
    }
    return state
}

export default catalogReducer