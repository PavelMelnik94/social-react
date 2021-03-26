import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let postData = [
    {id: 1, message: 'пост 1', likeCount: 15},
    {id: 2, message: 'пост 2', likeCount: 20}
];


let posts = postData
    .map(p => <Post message={p.message} likeCount={p.likeCount}/>);

const MyPosts = () => {
    return <div className={s.postsBlock}>
        my posts
        <div className={s.newPost}>
            new post
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button> написать</button>
            </div>
            <hr/>
        </div>

        <div className={s.posts}>
            {posts}

        </div>
    </div>

}

export default MyPosts;