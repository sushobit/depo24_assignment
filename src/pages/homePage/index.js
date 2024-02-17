import React from "react";
import styles from "./loginFormBlock.module.scss";
import LoginForm from "../../components/loginForm";
import Preloader from "../../components/preloader";

export default function LoginFormBlock(){
    return (
        <div className={styles.wrap}>
            <Preloader/>
            <LoginForm/>
        </div>
    )
}