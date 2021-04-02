import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreater() );
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreater(body));
    }

    let dialogs = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messages = state.messages
        .map(m => <Message text={m.message}/>)

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
