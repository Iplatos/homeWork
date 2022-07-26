import React from 'react';
import s from './Message.module.css';

export type  MessageData = {
    avatar: string;
    name: string;
    message: string;
    time: string;

}


function Message(props: MessageData) {
    return (

        <div className={s.wrapper}>

            <img className={s.img} src={props.avatar}/>
            <span className={s.tr}></span>
            <div className={s.time}>{props.time}</div>
            <div className={s.messageWrapper}>

                <div className={s.name}>{props.name}</div>
                <span className={s.message}>{props.message}</span>


            </div>
        </div>


    )
}

export default Message
