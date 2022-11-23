import axios from "axios";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";


export type BodyType = {
success:boolean
}

const instance = axios.create({
    baseURL:"https://neko-cafe-back.herokuapp.com/auth/test",

})
export const API = {
    postSome(body: BodyType){
        return  instance.post("https://neko-cafe-back.herokuapp.com/auth/test", body  )

    }
}