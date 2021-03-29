import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
    return (
        <div className={s.dialog}> {props.text}</div>

    );
}


export default Message;
