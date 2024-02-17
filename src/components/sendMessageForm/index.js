import React, {useRef, useState, useEffect} from "react";
import styles from "./sendMessageForm.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../app/actions";
import {selectAuthUser} from "../../app/reducers/authUserReducer";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function SendMessageForm(){
    const formEl = useRef(null);
    const textareaEl = useRef(null);
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(selectAuthUser);

    useEffect(() => {
        function onKeyDown(e){
            if (e.code === "Enter" && e.ctrlKey) onSendMessage();
        }
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [])

    function onSendMessage(){
        let message = textareaEl.current.value.trim();
        textareaEl.current.value = message;

        if (formEl.current.checkValidity() === false || !message.length) {
            setValidated(true);
        } else {
            setValidated(false);
            dispatch(addMessage(user.data,message));
            textareaEl.current.value = "";
        }
    }

    function onSubmitForm(e){
        e.preventDefault();
        e.stopPropagation();
        onSendMessage();
    }
    return (
        <Form noValidate
              validated={validated}
              onSubmit={onSubmitForm}
              ref={formEl}>
            <Form.Group as={Row}
                        controlId="formBasicPassword" >
                <Col md="10">
                    <Form.Label>
                        New message
                    </Form.Label>
                    <Form.Control ref={textareaEl}
                                  as="textarea"
                                  placeholder="enter your message and press Ctrl+Enter"
                                  required/>
                </Col>

                <Col md="2" >
                    <div className={styles.sendBtn}>
                        <Button type="submit">
                            send
                        </Button>
                    </div>
                </Col>
            </Form.Group>
        </Form>
    )
}

