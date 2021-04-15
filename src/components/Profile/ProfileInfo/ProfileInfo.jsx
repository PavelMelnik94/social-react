import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return <div>
        <div>
            <img
                src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
                alt="swwdwad"/>
        </div>

        <div className={s.descriptionBlock}>

            <div className={s.user}>
                <div className={s.userName}>{props.profile.fullName}, id {props.profile.userId}</div>
            <img src={props.profile.photos.large} />
            <ul>
                <li><b>Обо мне:</b> {props.profile.aboutMe}</li>
                <li><b>В поиске работы:</b> { props.profile.lookingForAJob ? 'Да' : 'Нет'}</li>
                <li><b>Описание к поиску работы:</b> { props.profile.lookingForAJobDescription}</li>
            </ul>

                <ul className={s.contacts}>
                    контакты:
                    <li><b>facebook:</b> {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'нету!'} </li>
                    <li><b>website:</b> {props.profile.contacts.website ? props.profile.contacts.website : 'сайт находится в разработке' }</li>
                    <li><b>vk:</b> {props.profile.contacts.vk ? props.profile.contacts.vk  : 'Работаю над профилем'}</li>
                    <li><b>twitter:</b> {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'не сижу в твиттере' }</li>
                    <li><b>instagram:</b> {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'пока нету'}</li>
                    <li><b>youtube:</b> {props.profile.contacts.youtube ? props.profile.contacts.youtube : 'забыл купить камеру...... ' }</li>
                    <li><b>github:</b> {props.profile.contacts.github ? props.profile.contacts.github : 'что это?????' }</li>
                    <li><b>mainLink:</b> {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : '?????! mainlink???' }</li>
                </ul>
            </div>

            моя ava +
            мой descrription
        </div>
    </div>
}

export default ProfileInfo;