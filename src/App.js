import React from 'react';
import ChatPage from "./pages/chatPage";
import LoginFormBlock from "./pages/homePage";

import {Navigate, Route, Routes} from "react-router-dom";

import {useSelector} from "react-redux";
import {selectAuthUser} from "./app/reducers/authUserReducer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const user = useSelector(selectAuthUser);

    return user.isLoggedIn ? (
        <Routes>
            <Route path="/chat"
                   element={<ChatPage/>}
            />
            <Route path="/*"
                   element={<Navigate to="/chat" replace={true}/>}
            />
        </Routes>
    ) : (
        <Routes>
            <Route path="/login"
                   element={<LoginFormBlock/>}
            />
            <Route path="/*"
                   element={<Navigate to="/login" replace={true}/>}
            />
        </Routes>
    );
}

export default App;

