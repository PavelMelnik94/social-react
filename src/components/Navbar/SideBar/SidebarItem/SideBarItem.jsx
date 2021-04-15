import React from 'react';
import s from './SideBarItem.module.css';
import {NavLink} from "react-router-dom";

const SideBarItem = (props) => {
    return (
        <div>
            <NavLink className={s.friendsItem} activeClassName={s.active} to={'/dialogs/' + props.id}>
                <img className={s.avatar} src={props.avatar} alt="ava"/>
                {props.name}
            </NavLink>
        </div>
    )

}

export default SideBarItem;