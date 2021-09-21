import React from "react";
import Login from "../pages/Login";
import CreateOrder from "../pages/CreateOrder";

export interface IRoute {
    path: string,
    component: React.ComponentType
    exact?: boolean
}
export enum RouteNames{
    LOGIN= '/login',
    REGISTRATION = '/registration',
    CREATE_ORDER = '/create_order'
}
export const publicRoutes: IRoute[] = [
    {
        path:  RouteNames.LOGIN,
        component: Login,
        exact: true
    },
    {
        path:  RouteNames.REGISTRATION,
        component: Login,
        exact: true
    },
]
export const authRoutes: IRoute[] = [
    {
        path: RouteNames.CREATE_ORDER,
        component: CreateOrder,
        exact: true
    }
]