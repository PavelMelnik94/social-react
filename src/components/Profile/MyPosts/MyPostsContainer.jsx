import React from 'react';
import {addPostCreater, onPostChangeCreater} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostCreater());

    }

    let onPostChange = (text) => {
        let action = onPostChangeCreater(text);
        props.store.dispatch(action);
    }

    return <MyPosts
        updateNewPostText={ onPostChange }
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />

}

export default MyPostsContainer;