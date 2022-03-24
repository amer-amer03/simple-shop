import { Action, ActionCreator } from "redux";

export enum ModalTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}

export interface IModalAction extends Action {
    modalType: string;
}

export const openModal: ActionCreator<IModalAction> = (modalType: string) => {
    return { type: ModalTypes.SHOW_MODAL, modalType }
}

export const hideModal: ActionCreator<Action> = () => {
    return { type: ModalTypes.HIDE_MODAL }
}