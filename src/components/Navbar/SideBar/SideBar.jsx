import React from 'react';
import s from './SideBar.module.css';
import SideBarItem from "./SidebarItem/SideBarItem";

const SideBar = (props) => {

    let friend = props.friend
        .map(d => <SideBarItem name={d.name} id={d.id} avatar={d.avatar}/>);


    return (
            <div className={s.friends}>
                {friend}
            </div>
    )

}

export default SideBar;