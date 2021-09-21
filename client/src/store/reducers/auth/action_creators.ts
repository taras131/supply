import {IUser} from "../../../models/IUser";
import {AuthActionEnum, setErrorAction, setIsAuthAction, setIsLoadingAction, setUserAction} from "./types";
import {AppDispatch} from "../../index";
import {login, registration} from "../../../http/authApi"
import jwt_decode from "jwt-decode";

export const AuthActionCreators = {
    setUser: (payload: IUser): setUserAction => ({type: AuthActionEnum.SET_USER, payload}),
    setIsAuth: (payload: boolean): setIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload}),
    setIsLoading: (payload: boolean): setIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): setErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (name: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const mockUser = await login(name, password)
            if (mockUser) {
                localStorage.setItem('token', mockUser.token)
                AuthActionCreators.setIsAuth(true)
                AuthActionCreators.setUser(jwt_decode(mockUser.token))
            } else {
                dispatch(AuthActionCreators.setError('Произошла ошибка входа'))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка входа'))
        }
    },
    registration: (name: string, role: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const token = await registration(name, role, password)
            if (token) {
                console.log(token)
                localStorage.setItem('token', token)
                AuthActionCreators.setIsAuth(true)
                console.log(jwt_decode(token))
                AuthActionCreators.setUser(jwt_decode(token))
            } else {
                dispatch(AuthActionCreators.setError('Произошла ошибка регистрации'))
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка регистрации'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('token')
        AuthActionCreators.setIsAuth(false)
        AuthActionCreators.setUser({} as IUser)
    }
}
