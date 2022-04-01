import { IUserData } from "../../interfaces/auth";
import { AuthTypes, IAuthAction } from "../actions/auth";

export interface IAuthState {
    userData: IUserData
    isLogin: boolean
}

export const initState: IAuthState = {
    userData: {
        name: '',
        email: '',
        phone: '',
        password: '',
    },
    isLogin: false,
};

function authReducer(state = initState, action: IAuthAction): IAuthState {
    switch (action.type) {
        case AuthTypes.REGISTRATION:
            return {
                ...state,
                isLogin: true,
                userData: {
                    ...state.userData,
                    ...action.payload
                }
            }
        case AuthTypes.LOGIN:
            return {
                ...state,
                isLogin: true,
            }
        case AuthTypes.LOGOUT:
            return {
                ...state,
                isLogin: false,
            }
    }
    return state
}

export default authReducer
