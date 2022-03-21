import { Action } from "@reduxjs/toolkit";
import { IUserData } from "../../interfaces/auth";

export enum AuthTypes {
    REGISTRATION = 'REGISTRATION',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

export interface IAuthAction extends Action {
    userData: IUserData;
}
export const registerUser = (userData: IUserData): IAuthAction => {
    return { type: AuthTypes.REGISTRATION, userData }
}
export const loginUser = () => {
    return { type: AuthTypes.LOGIN }
}
export const logoutUser = () => {
    return { type: AuthTypes.LOGOUT }
}