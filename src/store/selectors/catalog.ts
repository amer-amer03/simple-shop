import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { ICatalogState } from "../reducers/catalog";

const getState = (state: ISimpleShopState): ICatalogState => state.catalog

export const catalogDataSelector = createSelector([getState], (state) => state.catalogData.results)

export const catalogIsLoadingSelector = createSelector([getState], (state) => state.isLoading)
