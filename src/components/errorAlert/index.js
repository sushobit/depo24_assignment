import React from "react";
import Alert from 'react-bootstrap/Alert';

export default function ErrorAlert(props){
    return (
        <Alert variant="danger">
            Something goes wrong! Error: {props.error}
        </Alert>
    )
}
