import React, {FC} from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../store/reducers/auth/action_creators";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Header: FC = () => {
    const{isAuth, user} = useTypedSelector(state=>state.auth)
    const dispatch = useDispatch()
    const onExitClick = () => {
        dispatch(AuthActionCreators.logout())
    }
    return (
        <HeaderWrapper>
            Header
            {isAuth && user.name}
            {isAuth
            ? <button onClick={onExitClick}>Выйти</button>
            : <button onClick={onExitClick}>Войти</button>}

        </HeaderWrapper>
    );
};

export default Header;