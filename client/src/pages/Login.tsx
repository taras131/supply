import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useHistory, useLocation} from 'react-router-dom'
import {RouteNames} from "../router";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action_creators";

const LoginWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: gray;
`
const Login: FC = () => {
    const {isLoading, error, isAuth, user} = useTypedSelector(state => state.auth)
    console.log(isAuth)
    console.log(user)
    const history = useHistory()
    useEffect(()=>{
        if (isAuth) {
            history.push(RouteNames.CREATE_ORDER)
        }
    },[isAuth])
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: '',
        role: '',
        password: ''
    })
    const location: string = useLocation().pathname
    const isLogin: boolean = location === RouteNames.LOGIN
    const onInputChange = (e: any) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const onAuthClick = () => {
        if (isLogin) {
            dispatch(AuthActionCreators.login(data.name, data.password))
        } else {
            dispatch(AuthActionCreators.registration(data.name, data.role, data.password))
        }
    }
    if (isLoading) {
        return (
            <LoginWrapper>
                <div>Загрузка....</div>
            </LoginWrapper>
        )
    }
    return (
        <LoginWrapper>
            <h3>{isLogin ? "Вход" : "Регистрация"}</h3>
            <input type="text"
                   placeholder="Имя"
                   name="name"
                   value={data.name}
                   onChange={onInputChange}/>
            {!isLogin &&
            <input type="text"
                   placeholder="Роль"
                   name="role"
                   value={data.role}
                   onChange={onInputChange}/>
            }
            <input type="text"
                   placeholder="Пароли"
                   name="password"
                   value={data.password}
                   onChange={onInputChange}/>
            <div>{error && error} </div>
            <button onClick={onAuthClick}>{isLogin ? "Войти" : "Зарегестрироваться"}</button>
            <div>
                {isLogin
                    ? <div>
                        <p>Если у вас ещё нет аккаунта </p>
                        <span onClick={() => history.push(RouteNames.REGISTRATION)}>зарегистрируйтесь</span>
                    </div>
                    : <div>
                        <p>Если у вас уже есть аккаунт </p>
                        <span onClick={() => history.push(RouteNames.LOGIN)}>войдите</span>
                    </div>}
            </div>
        </LoginWrapper>
    );
};

export default Login;