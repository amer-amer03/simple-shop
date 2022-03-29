import { Action, ActionCreator } from "@reduxjs/toolkit";

export enum NotificationTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
}

export interface INotificationAction extends Action {
    payload: string;
}

export const addNotification: ActionCreator<INotificationAction> = (message: string): INotificationAction => {
    return { type: NotificationTypes.ADD_NOTIFICATION, payload: message }
}

export const removeNotification: ActionCreator<Action> = (): Action => {
    return { type: NotificationTypes.ADD_NOTIFICATION }
}
