import React from 'react';
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: () => {
            dispatch( sendMessageCreater() );
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
