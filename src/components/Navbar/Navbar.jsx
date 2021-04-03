import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";



const Navbar = (props) => {
    //
    // let friend = props.state.sidebar
    //     .map(d => <SideBarItem name={d.name} id={d.id} avatar={d.avatar}/>);

    return <nav className={s.nav}>
        <div>
            <NavLink to='/profile' className={s.item} activeClassName={s.active}>Profile</NavLink>
        </div>

        <div>
            <NavLink to='/dialogs' className={s.item} activeClassName={s.active}>Messages</NavLink>
        </div>

        <div>
            <NavLink to='/news' className={s.item} activeClassName={s.active}>News</NavLink>
        </div>

        <div>
            <NavLink to='/music' className={s.item} activeClassName={s.active}>Music</NavLink>
        </div>

        <div>
            <NavLink to='/settings' className={`${s.item} ${s.settings}`} activeClassName={s.active}>Settings</NavLink>
        </div>



   {/*     <div >
            <SideBar friend={props.state.friends}/>
        </div>*/}

    </nav>
}

export default Navbar;