import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { IModalState } from "../reducers/modal";

const getState = (state: ISimpleShopState): IModalState => state.modal

export const modalSelector = createSelector([getState], (state) => state.modalType)
