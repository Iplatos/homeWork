import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
    setImg:(img:boolean)=>void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback , setImg}) => { // деструктуризация пропсов
    const [name, setName] = useState <string>('') // need to fix any

    const [error,setError ] = useState< string | null>(null) // need to fix any

    const setNameCallback = (event:ChangeEvent<HTMLInputElement> ) => { // need to fix any
        setName(event.currentTarget.value)
        setError('')
        setImg(true)
    }


    const addUser = (name:string) => {
       name.trim().length>0? UserCorrect(name): UserUnCorrect(name)
    }
    const UserCorrect=(name:string)=>{
         addUserCallback(name)
            alert ("Hello" + " " + name.trim() + " !")
        setName(" ")
        setError(null)
        setImg(true)
    }

    const UserUnCorrect=(name:string)=>{
        alert (" stop")
        setError("stop, please")
        setName(" ")
        setImg(false)
    }




    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
