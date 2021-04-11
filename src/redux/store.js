import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



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
        },
        users: [
                {id: 1, firstName: 'Pavel', lastName: 'Durov', country: 'unknown', city: 'St-Kitts', mood: 'greetings all!'},
                {id: 2, firstName: 'Silvestr', lastName: 'Stallone', country: 'Italy', city: 'Castle de la Vega', mood: 'i kill him!'},
                {id: 3, firstName: 'Pierre', lastName: 'Woodster', country: 'USA', city: 'Los-Angeles', mood: 'i fuck all'}
            ]
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }


}



export default store;

// store - OOP