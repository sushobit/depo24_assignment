import React from "react";
import styles from './userAvatar.module.scss'

export default function UserAvatar(props) {
    return (
        <img className={styles.img}
             src={props.imgPath}
             alt={props.author}
        />
    );
}