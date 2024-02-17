import {ADD_MESSAGE, REMOVE_MESSAGES} from "../actionTypes";
import avatarPath1 from "../../assets/img/avatar1.jpg";
import avatarPath2 from "../../assets/img/avatar2.jpg"

const initialState = [ {text: "Hello!",
                        datetime: 1674207000751,
                        author: "Alex",
                        imgPath: avatarPath1,
                        authorId: 105
                       },
                       {text: "Hi! What's up?",
                        datetime: 1674207545751,
                        author: "Ann",
                        imgPath: avatarPath2,
                        authorId: 125},
                        {text: "Hi! What's up?",
                            datetime: 1675202400000,
                            author: "Ann",
                            imgPath: avatarPath2,
                            authorId: 125},
                        {text: "Hi! What's up?",
                            datetime: 1675893600000,
                            author: "Ann",
                            imgPath: avatarPath2,
                            authorId: 125},
                        {text: "Hi! What's up?",
                            datetime: 1675998500000,
                            author: "Ann",
                            imgPath: avatarPath2,
                            authorId: 125}
                        ];

export default function messagesReducer(state=initialState, action){
    switch (action.type) {
        case ADD_MESSAGE:
            return state = state.concat(action.payload)
        case REMOVE_MESSAGES:
            return state = [...initialState]
        default:
            return state;
    }
}

export const selectMessages = ( state ) => state.messages;