import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://upload.wikimedia.org/wikipedia/ru/thumb/0/0f/Mortal_kombat_logo.png/768px-Mortal_kombat_logo.png'
            alt='pic'/>

            <div className={s.loginBlock}>
                { props.isAuth ?
                    `Привет,  ${props.login} ${props.email}`

                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
    </header>
}

export default Header;