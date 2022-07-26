import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: (name:string)=>void // need to fix any
    error: string | null// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.trim().length === 0 ? s.error :s.correct  // need to fix with (?:)

    return (
        <div className={s.inputButton}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.buttonHW3} onClick={()=>addUser(name)}>add</button>
            <div className={s.errorMassage} ><b>{error}</b></div>

            <span className={s.totalUsers}><b>{totalUsers}</b></span>
        </div>
    )
}

export default Greeting
