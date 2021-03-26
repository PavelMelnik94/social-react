import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>

        <div>
            <img
                src="https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
                alt=""/>
        </div>

        <div>
            ava +descrription
        </div>
        <MyPosts/>
    </div>
}

export default Profile;