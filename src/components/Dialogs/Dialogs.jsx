import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}> диалог</div>
                <div className={s.dialog}> диалог1</div>
                <div className={s.dialog}> диалог2</div>
                <div className={s.dialog}> диалог3</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> hi </div>
                <div className={s.message}> how is yo</div>
                <div className={s.message}> dsdasdasd</div>
            </div>
        </div>
    )
}

export default Dialogs;
