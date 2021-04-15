import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>
                <img className={s.avatar} src={props.avatar} alt="ava"/>
                {props.name}
            </NavLink>
        </div>
    );
}


export default DialogItem;
