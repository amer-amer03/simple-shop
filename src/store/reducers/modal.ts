import { IModalAction, modalTypes } from "../actions/modal";

export interface IModalState {
    modalType: string,
}

export const initState: IModalState = {
    modalType: ''
};

function modalReducer(state = initState, action: IModalAction): IModalState {
    switch (action.type) {
        case modalTypes.SHOW_MODAL:
            return { ...state, modalType: action.modalType ? action.modalType : '' }
        case modalTypes.HIDE_MODAL:
            console.log(action.type)
            return { ...state, modalType: '' }
    }
    return state
}

export default modalReducer
