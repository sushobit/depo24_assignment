import React from "react";
import styles from "./preloader.module.scss";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../app/reducers/authUserReducer";



export default function Preloader(){

    const user = useSelector(selectAuthUser);

    if (!user.loginProcess) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.loaderWrap}>
                <span className={styles.loader}></span>
            </div>
        </div>
    );
}