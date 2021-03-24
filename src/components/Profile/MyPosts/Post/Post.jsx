import React from 'react';
import s from './Post.module.css';

const Post = () => {
     return <div className={`${s.item} ${s.test}`}>
                <img src="https://cdn.icon-icons.com/icons2/884/PNG/512/person_4_icon-icons.com_68900.png" alt="ava"/>
                post 1
            </div>

}

export default Post;