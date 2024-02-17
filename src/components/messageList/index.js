import React, {useEffect, useRef} from "react";
import styles from "./messageList.module.scss";
import UserAvatar from "../userAvatar";
import UserMessage from "../userMessage";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useSelector} from "react-redux";
import {selectMessages} from "../../app/reducers/messagesReducer";

export default function MessageList(){

    const messages = useSelector(selectMessages);
    const listEl = useRef();

    const list = messages.map(message => {
        let {text, datetime, author ,imgPath} = message;
        let date = new Date(datetime);

        return (
            <Row key={datetime + Math.random()}
                 className={styles.message}>
                <Col md={2} sm={2} xs={3}>
                    <UserAvatar autor={author}
                                imgPath={imgPath}/>
                </Col>
                <Col md={10} xs={9}>
                    <UserMessage text={text}
                                 date={date}
                                 author={author}/>
                </Col>
            </Row>
        )
    })

    useEffect(()=> {
        listEl.current.lastElementChild.scrollIntoView();
    },[messages])

    return (
        <div className={styles.wrap}>
            <div className={styles.wrap2}>
                 <div className={styles.wrap3}
                      ref={listEl}>
                      {list}
                 </div>
            </div>
        </div>
    )
}