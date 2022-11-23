import React, {MouseEventHandler} from 'react'
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    /* setFilter: (filter:FilterType)=>void*/
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.AppWrapper}>
            <div className={s.affair}> {props.affair.name}</div>
             <div className={s.priority}>   {props.affair.priority}</div>

            <button className={s.button} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
