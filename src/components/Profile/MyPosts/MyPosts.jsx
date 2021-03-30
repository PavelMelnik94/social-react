import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";


const MyPosts = (props) => {

    let newPost = React.createRef();
    let onPostChange = () => {
    updateNewPostText();
    }

    let postMessage = () => {
        let text = newPost.current.value;
        props.addPost(text);
        updateNewPostText('');

    }

    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div className={s.postsBlock}>
        my posts
        <div className={s.newPost}>
            new post
            <div>
                <textarea className={s.areaPost} onChange={onPostChange} ref={newPost} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={postMessage}> написать</button>
            </div>
            <hr/>
        </div>

        <div className={s.posts}>
            {postsElements}

        </div>
    </div>

}

export default MyPosts;