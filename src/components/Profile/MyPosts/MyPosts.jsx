import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";





const MyPosts = (props) => {

    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

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
            {postsElements}

        </div>
    </div>

}

export default MyPosts;