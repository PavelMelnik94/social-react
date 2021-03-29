import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

let newPost = React.createRef();


let dialogText = () => {
    let text = newPost.current.value;
    alert(text);
}

    let dialogs = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messages = props.state.messages
        .map(m => <Message text={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogs}
            </div>
            <div className={s.messages}>



                <div className={s.dialogWindow}>{messages}</div>
                <textarea ref={newPost} className={s.dialogText}></textarea>
                <div>
                    <button onClick={ dialogText } className={s.postTextBtn}>ответить</button>
                </div>


            </div>
        </div>
    )
}

export default Dialogs;
