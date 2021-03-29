import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={`${s.item} ${s.test}`}>
        <img src="https://www.vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="ava"/>
        {props.message}
        <div className={s.like}>
            <span >like</span>
            <span> {props.likeCount}</span>
        </div>
    </div>

}

export default Post;