import {$authHost, $host} from "./index";

export const registration = async (name: string, role: string, password: string) => {
    console.log(name, role, password)
    const {data} = await $host.post('/users', {name,  role, password})
    return data
}
export const login = async (name: string, password: string) => {
    const {data} = await $host.post('/api/user/login', {name, password})
    return data
}
export const chek = async () => {
    const {data} = await $authHost.get('/api/user/auth')
    return data
}
export const getOneUser = async (id: number) => {
    const {data} = await $authHost.get('/api/user/get_one_user/' + id)
    return data
}
export const getAllUser = async () => {
    const {data} = await $authHost.get('/api/user/get_all_user/')
    return data
}