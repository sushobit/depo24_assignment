import React from "react";
import styles from "./loginUserInfo.module.scss"
import UserAvatar from "../userAvatar";
import {useSelector} from "react-redux";
import {selectAuthUser} from "../../app/reducers/authUserReducer";

export default function LoginUserInfo(){
    const user = useSelector(selectAuthUser);

    return (
        <div className={styles.wrap}>
            <div>
                <UserAvatar imgPath={user.data.imgPath}
                            author={user.name}
                />
            </div>
            <div>
                <span className={styles.name}>
                    {user.data.name}
                </span>
            </div>

        </div>
    )
}