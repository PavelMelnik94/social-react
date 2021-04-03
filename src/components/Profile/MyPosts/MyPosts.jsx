import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreater, onPostChangeCreater} from "../../../redux/profile-reducer";
import {updateNewMessageBodyCreater} from "../../../redux/dialogs-reducer";
import MyPostsContainer from "./MyPostsContainer";


const MyPosts = (props) => {

    let newPost = React.createRef();


    let onAddPost = () => {
        props.addPost();

    }


    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div className={s.postsBlock}>
        my posts
        <div className={s.newPost}>
            new post
            <div>
                <textarea className={s.areaPost} onChange={onPostChange} ref={newPost} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={ onAddPost}> написать</button>
            </div>
            <hr/>
        </div>

        <div className={s.posts}>
            {postsElements}

        </div>
    </div>

}

export default MyPosts;