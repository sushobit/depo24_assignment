import React from "react";
import styles from "./userList.module.scss";
import ErrorAlert from "../errorAlert";

import {useSelector, useDispatch} from "react-redux";
import {selectUsers} from "../../app/reducers/usersReducer";
import {loadUsers} from "../../app/asyncActions";

import Button from 'react-bootstrap/Button';

export default function UserList(){
    const {data, loading, isFetchError} = useSelector(selectUsers)
    const dispatch = useDispatch();

    function onLoadUsers(){
        dispatch(loadUsers());
    }

    const list = data.map(
        user => <li key={user.id}>{user.name}</li>
    )

    return (
        <div className={styles.wrap}>

            {isFetchError && <ErrorAlert error={isFetchError}/>}

            <div className={styles.list}>
                 <ul>
                     {list}
                 </ul>
            </div>

            <Button variant="success"
                    size="sm"
                    className="me-2 mt-2"
                    onClick={onLoadUsers}>
                {loading ? (
                        <span>
                            <span className="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                            />
                            loading...
                        </span>
                    ) : (
                        <span>
                            load users
                        </span>
                    )
                }
            </Button>

        </div>
    )
}