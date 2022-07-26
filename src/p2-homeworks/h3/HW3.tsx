import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

// types
export type UserType = {
    id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState <Array<UserType>> ([]) // need to fix any
console.log(users)
    const addUserCallback = (user: string) => { // need to fix any
        let NewUser = {id:v1() , name: user}
        setUsers([NewUser ,...users  ]) // need to fix

    }
let ImgUrl1="https://img3.akspic.ru/previews/8/3/3/8/6/168338/168338-nyujork-ulice_nyu_jorka-ulica-manhetten-zdanie-500x.jpg"
    let ImgUrl2= "http://sun9-31.userapi.com/impf/c854428/v854428989/1867a7/mxEzBYUShgU.jpg?size=563x566&quality=96&sign=03941e0bcdba30db1dc979a8a7424490&type=album"
    let [Img,setImg]=useState(true)
    console.log(Img)
let styles={
            backgroundImage:  'url(' + (Img? ImgUrl1 : ImgUrl2 )+ ')',
    width: '400px',
    height:'500px',
    TextAlign: 'center',
    margin: "0 auto"




}
    return (
        <div style={styles}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer setImg={setImg} users={users} addUserCallback={addUserCallback}/>

           {users.map((username, index)=>{
                 return <div className='totalUsers' key={index }>
                  <div> <b>{username.name}</b> </div>
                 </div>

            })}


        </div>
    )
}

export default HW3
