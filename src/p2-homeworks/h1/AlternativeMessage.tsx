import React from 'react'
import s from './Message.module.css';

export type AlternativeMessageData = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function AlternativeMessage(props:AlternativeMessageData) {
    return (
        <div className={s.wrapper}>
            <div><img className={s.img} src={props.avatar} alt=""/> </div>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
    )
}

export default AlternativeMessage
