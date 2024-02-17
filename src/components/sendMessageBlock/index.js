import React from "react";
import styles from "./sendMessageBlock.module.scss";
import SendMessageForm from "../sendMessageForm";


export default function SendMessageBlock(){
    return (
        <div className={styles.wrap}>
            <SendMessageForm/>
        </div>
    )
}