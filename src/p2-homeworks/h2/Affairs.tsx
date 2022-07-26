import React, {MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairType, FilterType } from './HW2'
import affair from "./Affair";
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    let mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")

    }
    const setHigh = () => {
        props.setFilter("high")

    }
    const setMiddle = () => {
        props.setFilter("middle")

    }
    const setLow = () => {
        props.setFilter("low")


    }
const setclass=(filter: FilterType)=>{

        return s.priorityBTN + (props.filter===filter? " " + s.isActive : " " )
}



    return (
        <div className={s.buttonWrapper} >

            {mappedAffairs}

            <button  className={setclass("high")}  onClick={setAll}>All</button>
            <button className={setclass("high")} onClick={setHigh}>High</button>
            <button className={s.priorityBTN} onClick={setMiddle}>Middle</button>
            <button className={s.priorityBTN} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
