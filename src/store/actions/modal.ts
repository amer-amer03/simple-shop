import { Action, ActionCreator } from "redux";

export enum modalTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}

export interface IModalAction extends Action {
    modalType?: string;
}

export const openModal: ActionCreator<Action> = (modalType: string) => {
    return { type: modalTypes.SHOW_MODAL, modalType }
}

export const hideModal: ActionCreator<Action> = () => {
    return { type: modalTypes.HIDE_MODAL }
}