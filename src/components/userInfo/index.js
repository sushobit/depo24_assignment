import React from "react";
import styles from "./userInfo.module.scss";
import UserAvatar from "../userAvatar";

export default function UserInfo(props){
    return (
        <>
            <UserAvatar autor={props.author}
                        imgPath={props.imgPath}
            />
            <p className={styles.author}>
                {props.author}
            </p>
        </>
    )
}