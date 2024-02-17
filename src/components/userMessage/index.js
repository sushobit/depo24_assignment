import React from "react";
import styles from "./userMessage.module.scss";

function getMesDate(date){

    function showDate(num){
        if (num.toString().length < 2) num = "0" + num;
        return num;
    }
    return  {
        day: showDate( date.getDate() ),
        month: showDate(date.getMonth()+1),
        hours: showDate( date.getHours() ),
        min: showDate ( date.getMinutes() )
    }
}

export default function UserMessage(props){

    let {text, date, author} = props;
    const mesDate = getMesDate(date);

    return (
        <div className="border rounded-end bg-light p-2 mb-2">

            <div className={styles.header}>
                <span className={styles.author}>
                    {author}
                </span>
                <span className={styles.date}>
                    Date: {`${mesDate.day}/${mesDate.month} ${mesDate.hours}:${mesDate.min}`}
                </span>
            </div>

            <p className={styles.text}>
                {text}
            </p>
        </div>
    )
}