import { Action, ActionCreator } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces/auth";

export enum AuthTypes {
    REGISTRATION = 'REGISTRATION',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface IAuthAction extends Action {
    payload: IUserData;
}
export const registerUser: ActionCreator<IAuthAction> = (userData: IUserData) => {
    return { type: AuthTypes.REGISTRATION, payload: userData }
}
export const loginUser: ActionCreator<Action> = (): Action => {
    return { type: AuthTypes.LOGIN }
}
export const logoutUser: ActionCreator<Action> = (): Action => {
    return { type: AuthTypes.LOGOUT }
}