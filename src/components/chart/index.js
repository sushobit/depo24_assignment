import React from "react";
import Index from "../messages";
import SideBar from "../sideBar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './chat.module.scss'
import ChatNavbar from "../chatNavbar";


export default function Chat(){
    return (
        <div className="d-flex flex-column h-100">

            <ChatNavbar/>

            <div className={styles.wrap}>
                <Container >
                    <div className={styles.position}>
                        <Row className="align-items-stretch h-100">

                            <Col md={8} xs={12}
                                 className="h-100">
                                <div className={styles.messages}>
                                    <h3 className="text-center">
                                        Chat (last messages)
                                    </h3>
                                    <Index/>
                                </div>
                            </Col>

                            <Col md={4} xs={0} className="h-100">
                                <SideBar/>
                            </Col>

                        </Row>
                    </div>
                </Container>
            </div>

        </div>
    )
}