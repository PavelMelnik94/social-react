import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        my posts
            <div>
                new post
                <textarea></textarea>
                <button> написать</button>
            </div>

        <div className={s.posts}>
            <Post message='Hi, how are you?' likeCount='15'/>
            <Post  message='im fine!' likeCount='20'/>





         </div>
    </div>

}

export default MyPosts;