import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
            <div>
                new post
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button> написать</button>
            </div>

        <div className={s.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />




         </div>
    </div>

}

export default MyPosts;