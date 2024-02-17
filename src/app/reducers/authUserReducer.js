import {REMOVE_LOGIN_USER,
        RECEIVE_LOGIN_USER,
        REQUEST_LOGIN_USER
} from "../actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
                      data: user,
                      isLoggedIn: !!user,
                      loginProcess: false
                     }

export default function authUserReducer(state = initialState, action){
    switch (action.type){
        case REQUEST_LOGIN_USER:
            return state = {...state,
                            loginProcess: true
                            };
        case RECEIVE_LOGIN_USER:
            return state = {...{data:action.payload,
                            isLoggedIn: true,
                            loginProcess: false}
                            };
        case REMOVE_LOGIN_USER:
            return state = {...state,
                            data: {},
                            isLoggedIn: false
                            }
        default:
            return state;
    }
}

export const selectAuthUser = (state) => state.authUser;