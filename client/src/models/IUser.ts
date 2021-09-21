export interface IUser {
    id: number,
    name: string,
    role: string,
    exp: number,
    iat: number
}

export enum UserRoles {
    CUSTOMER = "заказчик",
    DIRECTOR = "директор",
    EXECUTOR = "исполнитель",
    ACCOUNTANT = "бухгалтер"
}