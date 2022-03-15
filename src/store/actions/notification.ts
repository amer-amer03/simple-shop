import { Action } from "@reduxjs/toolkit";

export enum NotificationTypes {
    ADD_NOTIFICATION = 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
}

export interface INotificationAction extends Action {
    message: 'message';
}

export const addNotification = (message: string) => {
    return { type: NotificationTypes.ADD_NOTIFICATION, message }
}

export const removeNotification = () => {
    return { type: NotificationTypes.ADD_NOTIFICATION }
}
