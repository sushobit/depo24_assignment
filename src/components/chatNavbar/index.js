import React from "react";
import styles from "./chatNavbar.module.scss"
import LoginUserInfo from "../loginUserInfo";
import {logoutUser} from "../../app/asyncActions";
import {removeMessages, removeUsers} from "../../app/actions";
import {useDispatch} from "react-redux";

import Container from 'react-bootstrap/Container';
import {Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function ChatNavbar(){

    const dispatch = useDispatch();

    function onClick(){
        dispatch(logoutUser())
        dispatch(removeMessages())
        dispatch(removeUsers())
    }
    return (
        <Navbar bg="primary"
                variant="dark"
                className={styles.wrap}>
            <Container className={styles.userInfo}>
                <LoginUserInfo/>
                <Button variant="light"
                        size="sm"
                        onClick={onClick}>
                    sign out
                </Button>
            </Container>
        </Navbar>
    )
}