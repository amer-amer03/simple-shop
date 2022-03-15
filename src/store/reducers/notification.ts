import { INotificationAction, NotificationTypes } from "../actions/notification";

export interface INotificationState {
    message: string
}

export const initState: INotificationState = {
    message: ''
};

function notificationReducer(state = initState, action: INotificationAction): INotificationState {
    switch (action.type) {
        case NotificationTypes.ADD_NOTIFICATION:
            return { ...state, message: action.message ? action.message : '' }
        case NotificationTypes.REMOVE_NOTIFICATION:
            return { ...state, message: '' }
    }return state
}

export default notificationReducer
