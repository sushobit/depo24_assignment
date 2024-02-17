import { RECEIVE_USERS,
        REQUEST_USERS,
        SET_FETCHING_ERROR,
        REMOVE_USERS
} from "../actionTypes";

import avatarPath1 from "../../assets/img/avatar1.jpg";
import avatarPath2 from "../../assets/img/avatar2.jpg";


const initialState = { data: [ {name: 'Ann',
                                id: 125,
                                imgPath: avatarPath1,
                                gender: 'female'
                                },
                                {name: 'Alex',
                                 id: 105,
                                 imgPath: avatarPath2,
                                 gender: 'male'
                                }],
                        loading: false,
                        isFetchError: false
                     }

export default function usersReducer(state = initialState,action){
    switch (action.type) {
        case REQUEST_USERS:
            return state = {...state,
                            loading: true
                            }
        case RECEIVE_USERS:
            return state = {...state,
                            data: [...action.payload],
                            loading: false,
                            isFetchError: false
                           }
        case SET_FETCHING_ERROR:
            return state = {...state,
                            isFetchError: action.payload,
                            loading: false
                           }
        case REMOVE_USERS:
            return state = {...state,
                            data: [...initialState.data]
                            }
        default:
            return state;
    }
}

export const selectUsers = ( state ) => state.users;