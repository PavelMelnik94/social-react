import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    );
}

const Messages = (props) => {
    return (
        <div className={s.dialog}> {props.text}</div>
    );
}


let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Petya'},
    {id: 3, name: 'Vasia'},
    {id: 4, name: 'Alexandr'},
    {id: 5, name: 'Pavel'},
    {id: 6, name: 'Egor'},
    {id: 7, name: 'Daniil'},
    {id: 8, name: 'Oleg'},
    {id: 9, name: 'Antony'},
    {id: 10, name: 'Alexey'}
];


let dialogs = dialogsData
    .map( d => <DialogItem name={d.name} id={d.id}/>);


let messages = [
    {id: 1, message: 'Hellow, orld!'},
    {id: 2, message: 'hi'},
    {id: 3, message: 'how are you?'},
    {id: 4, message: '+453 4534 45786'},
    {id: 5, message: 'im fine'},
    {id: 6, message: 'goodbay'},
    {id: 7, message: 'another day of sunrise'},
    {id: 8, message: 'fish text'},
    {id: 9, message: 'lorem 5 words'},
    {id: 10, message: 'thanks!!!'}
];


let messagesElements = messages
    .map( m => <Messages text={m.message}/>)




const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
