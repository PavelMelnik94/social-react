import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog} >
            <NavLink  activeClassName={s.active} to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    );
}


const Messages = (props) => {
    return (
        <div className={s.dialog}> {props.text}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Petya' id='2'/>
                <DialogItem name='Vasia' id='3'/>
                <DialogItem name='Alexandr' id='4'/>
                <DialogItem name='Pavel' id='5'/>
                <DialogItem name='Egor' id='6'/>
                <DialogItem name='Daniil' id='7'/>
                <DialogItem name='Oleg' id='8'/>
                <DialogItem name='Antony' id='9'/>
                <DialogItem name='Alexey' id='10'/>
            </div>
            <div className={s.messages}>
                <Messages text='Hellow, orld!' />
                <Messages text='hi' />
                <Messages text='how are you?' />
                <Messages text='+453 4534 45786' />
                <Messages text='im fine' />
                <Messages text='goodbay' />
                <Messages text='another day of sunrise' />
                <Messages text='fish text' />
                <Messages text='lorem 5 words' />
                <Messages text='thanks!!!' />
            </div>
        </div>
    )
}

export default Dialogs;
