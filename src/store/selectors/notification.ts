import { createSelector } from "@reduxjs/toolkit";
import { ISimpleShopState } from "..";
import { INotificationState } from "../reducers/notification";

const getState = (state: ISimpleShopState): INotificationState => state.notification

export const notificationSelector = createSelector([getState], (state) => state.message)

