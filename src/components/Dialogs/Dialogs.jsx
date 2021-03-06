import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let dialogs = state.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>);

    let messages = state.messages
        .map(m => <Message key={m.id} text={m.message}/>)

    let newMessageBody = state.newMessageBody;

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {/*люди*/}
                {dialogs}
            </div>

            <div className={s.messages}>

                {/*сообщения*/}
                <div className={s.dialogWindow}>
                    {messages}
                </div>


                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            className={s.dialogText}
                            placeholder='Enter your message'>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick} className={s.postTextBtn}>send</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dialogs;
