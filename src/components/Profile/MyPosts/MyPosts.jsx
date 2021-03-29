import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";





const MyPosts = (props) => {

    let newPost = React.createRef();


    let postMessage = () => {
        let text = newPost.current.value;
        props.addPost(text);
    }

    let postsElements = props.post.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return <div className={s.postsBlock}>
        my posts
        <div className={s.newPost}>
            new post
            <div>
                <textarea ref={newPost}></textarea>
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