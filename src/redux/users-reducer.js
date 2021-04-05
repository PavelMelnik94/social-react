const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg', followed: false, fullName: 'Pavel', status: 'greetings all!', location: {city: 'minsk', country: 'belarus'} },
        {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg', followed: true, fullName: 'John', status: 'hello', location: {city: 'russia', country: 'moskow'} },
        {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg', followed: false, fullName: 'Alena', status: 'wedding!', location: {city: 'minsk', country: 'belarus'} },
        {id: 4, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Pavel_Derevyanko_%282017-10-03%29_2_%28cropped%29.jpg', followed: true, fullName: 'James', status: 'sad', location: {city: 'USA', country: 'Colorado'} }
    ]
};

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map( u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    })
                }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }
        default:
            return state;
    }

}


export const followAC = (userId) => ( {type: FOLLOW, userId} );
export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} );
export const setUsersAC = (userId) => ( {type: SET_USERS, userId} );





export default usersReducer;