import { Action, ActionCreator } from "redux";

export enum ModalTypes {
    SHOW_MODAL = 'SHOW_MODAL',
    HIDE_MODAL = 'HIDE_MODAL',
}
type modalTypes = 'registration' | 'login' | 'cart' | 'check'
export interface IModalAction extends Action {
    payload: modalTypes;
}

export const openModal: ActionCreator<IModalAction> = (modalType: modalTypes): IModalAction => {
    return { type: ModalTypes.SHOW_MODAL, payload: modalType }
}

export const hideModal: ActionCreator<Action> = (): Action => {
    return { type: ModalTypes.HIDE_MODAL }
}