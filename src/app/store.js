import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./reducers/usersReducer";
import messagesReducer from "./reducers/messagesReducer";
import authUserReducer from "./reducers/authUserReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
    authUser: authUserReducer
  }
})