import React, {useState} from "react";
import styles from "./loginForm.module.scss";
import UserAvatar from "../userAvatar";
import manImgPath from "../../assets/img/avatarForMan.jpg";
import womanImgPath from "../../assets/img/avatarForWoman.jpg"

import {useDispatch} from "react-redux";
import {loginUser} from "../../app/asyncActions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function LoginForm(){

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    function onChangeName(e){
        setName(e.target.value);
    }

    function onChangeGender(e){
        setGender(e.target.value);
    }

    function onSubmitForm(e){
        setName(name.trim());
        const user={name: name.trim(),gender};
        const form = e.currentTarget;

        e.preventDefault();

        if (form.checkValidity() === false || !user.name.length) {
            e.stopPropagation();
        } else {
            dispatch(loginUser(user));
        }
        setValidated(true);
    }

    return (
        <Form className={styles.wrap}
              onSubmit={onSubmitForm}
              noValidate validated={validated}>

            <Form.Group className="mb-3">
                <Form.Label>
                    To join in chat, please, enter your name
                </Form.Label>
                <Form.Control type="text"
                              placeholder="Your name"
                              value={name}
                              onChange={onChangeName}
                              required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>
                    Please, choose your gender:
                </Form.Label>
                <Form.Group as={Row}>

                    <Col sm="3">
                        <UserAvatar imgPath={manImgPath}/>
                        <Form.Group className={styles.radio}>
                            <Form.Check type='radio' id='userGenderMan'
                                        label='man' name="userGender"
                                        value='man' onChange={onChangeGender}
                                        required
                            />
                        </Form.Group>
                    </Col>

                    <Col sm="3">
                        <UserAvatar imgPath={womanImgPath}/>
                        <div className={styles.radio}>
                            <Form.Check type='radio'
                                        id='userGenderWoman'
                                        label='woman'
                                        name="userGender"
                                        value='woman'
                                        onChange={onChangeGender}
                            />
                        </div>
                    </Col>

                </Form.Group>
            </Form.Group>

            <Button className={styles.button}
                    variant="primary"
                    type="submit">
                Sing in
            </Button>
        </Form>

    )
}
