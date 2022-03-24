import { Action, ActionCreator } from "@reduxjs/toolkit";

export enum NotificationTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
}

export interface INotificationAction extends Action {
    message: string;
}

export const addNotification: ActionCreator<INotificationAction> = (message: string) => {
    return { type: NotificationTypes.ADD_NOTIFICATION, message }
}

export const removeNotification: ActionCreator<Action> = () => {
    return { type: NotificationTypes.ADD_NOTIFICATION }
}
