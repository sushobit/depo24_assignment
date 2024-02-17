import React from "react";
import {iconsDefs} from "../../assets/icons";

export default function Icon(props){
    const {viewBox, width, height, body} =  iconsDefs[props.iconType]

    return (
        <svg viewBox={viewBox}
             width={width}
             height={height}
             className={props.className}>
            {body}
        </svg>
    )
}