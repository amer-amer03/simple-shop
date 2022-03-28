import { IModalAction, ModalTypes } from "../actions/modal";

export interface IModalState {
    modalType: string,
}

export const initState: IModalState = {
    modalType: ''
};

function modalReducer(state = initState, action: IModalAction): IModalState {
    switch (action.type) {
        case ModalTypes.SHOW_MODAL:
            return { ...state, modalType: action.payload }
        case ModalTypes.HIDE_MODAL:
            return { ...state, modalType: '' }
    }
    return state
}

export default modalReducer
