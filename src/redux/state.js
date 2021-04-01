const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-MEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'пост 1', likeCount: 15},
                {id: 2, message: 'пост 2', likeCount: 20}
            ],
            newPostText: 'fish text'
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dimych',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 2,
                    name: 'Petya',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 3,
                    name: 'Vasia',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 4,
                    name: 'Alexandr',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 5,
                    name: 'Pavel',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 6,
                    name: 'Egor',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 7,
                    name: 'Daniil',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 8,
                    name: 'Oleg',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 9,
                    name: 'Antony',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                },
                {
                    id: 10,
                    name: 'Alexey',
                    avatar: 'https://w7.pngwing.com/pngs/9/791/png-transparent-facial-hair-face-zendesk-avatar-miscellaneous-face-heroes.png'
                }
            ],
            messages: [
                {id: 1, message: 'Hellow, orld!',},
                {id: 2, message: 'hi'},
                {id: 3, message: 'how are you?'},
                {id: 4, message: '+453 4534 45786'},
                {id: 5, message: 'im fine'},
                {id: 6, message: 'goodbay'},
                {id: 7, message: 'another day of sunrise'},
                {id: 8, message: 'fish text'},
                {id: 9, message: 'lorem 5 words'},
                {id: 10, message: 'thanks!!!'}
            ],
            newMessageBody: ''
        },
        sideBar: {
            friends: [
                {
                    id: 4234,
                    name: 'alex',
                    avatar: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg'
                },
                {
                    id: 453,
                    name: 'john',
                    avatar: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg'
                },
                {
                    id: 76,
                    name: 'james',
                    avatar: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-u.jpg'
                }]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type ===  SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body,})
            this._callSubscriber(this._state);
        }


    }


}



export const addPostCreater = () => ({type: ADD_POST});
export const onPostChangeCreater = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});


export const sendMessageCreater = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


window.store = store;

export default store;

// store - OOP