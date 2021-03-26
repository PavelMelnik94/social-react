import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
                alt=""/>
        </div>

        <div className={s.descriptionBlock}>
            ava +descrription
        </div>
    </div>
}

export default ProfileInfo;