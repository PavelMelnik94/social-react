const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-MEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body,})
            return state;
        default:
            return state;
    }

}


export const sendMessageCreater = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreater = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;