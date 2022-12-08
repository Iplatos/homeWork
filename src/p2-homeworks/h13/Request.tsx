import React, {memo, useEffect, useState} from 'react'
import {API} from "./RequestAPI";
import {AxiosError} from "axios";


export const Request = () => {

    const [inputChange, setinputChange] = useState(true)
    const [requestText, setrequestText] = useState("text")


    const sendInputStatus = () => {
        API.postSome({success: inputChange})
            .then(res => {

                console.dir(res.data)
                setrequestText(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error});
                setrequestText(error.response ? error.response.data.errorText : error.message)
            })

    }
    const oninputChangeHandler = () => {
        setinputChange(!inputChange)
    }
    console.log(inputChange)
    return (
        <>
            <div>{requestText}</div>
            <button onClick={sendInputStatus}></button>
            <input checked={inputChange} onChange={oninputChangeHandler} type={"checkbox"}/>
        </>
    )
}