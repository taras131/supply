import {IUser} from "../../../models/IUser";

export interface AuthState{
    isAuth: boolean,
    isLoading: boolean,
    error: string,
    user: IUser,
}
export enum AuthActionEnum{
    SET_IS_AUTH = "SET_IS_AUTH",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_ERROR = "SET_ERROR",
}
export interface setIsAuthAction{
    type: AuthActionEnum.SET_IS_AUTH,
    payload: boolean
}
export interface setUserAction{
    type: AuthActionEnum.SET_USER,
    payload: IUser
}
export interface setIsLoadingAction{
    type: AuthActionEnum.SET_IS_LOADING,
    payload: boolean
}
export interface setErrorAction{
    type: AuthActionEnum.SET_ERROR,
    payload: string
}
export type AuthAction =
    setIsAuthAction |
    setUserAction |
    setIsLoadingAction |
    setErrorAction