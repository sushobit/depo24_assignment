import avatarPathAnonym from "../assets/img/avatarUnnown.jpg";

import {
    fetchLoginUser,
    fetchUsers,
    sendLoginUser
} from "./chatAPI";

import {
    addMessage,
    receiveUsers,
    requestUsers,
    requestLoginUser,
    receiveLoginUser,
    setFetchingError,
    removeLoginUser
} from "./actions";

function mapArray(array){
    return array.map(user => {
        return {name: user.name || "Anonymous",
                id: user.id,
                imgPath: user.imgPath || avatarPathAnonym,
                gender: user.gender || "unknown"
               }
    });
}

const loginUser = (user) => {
    return (dispatch) => {
            dispatch(requestLoginUser());

            sendLoginUser(user)
            .then(user => fetchLoginUser(user))
            .then(user => dispatch(receiveLoginUser(user)))
    }
}

const logoutUser = () => {
    return (dispatch) => {
            localStorage.removeItem("user");
            dispatch(removeLoginUser());
    }
}

const loadUsers =() => {
    return (dispatch) => {
            dispatch(requestUsers());

            fetchUsers()
                .then(users => {
                    const loadUsers = mapArray(users);

                    setTimeout(() => {
                        dispatch(receiveUsers(loadUsers));
                        loadUsers.map( (user, item) => (
                                setTimeout(() => {
                                    dispatch(addMessage(user, "Hello! :)"))
                                },item*300)
                            )
                        )
                    },1000)
                })
                .catch( e => {
                    dispatch(setFetchingError(e.message));
                    setTimeout(() => {
                        dispatch(setFetchingError(false));
                    }, 2500)
                })
    }
}

export {loginUser,
        logoutUser,
        loadUsers
};