import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>

        <div>
            <img
                src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
                alt=""/>
        </div>

        <div>
            ava +descr
        </div>

        <div>
            my posts
        </div>

        <div>
            new post
        </div>

        <div className={s.item}>
            post 1
        </div>

        <div className={s.item}>
            post 2
        </div>



    </div>
}

export default Profile;