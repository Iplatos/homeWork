import axios from "axios"



export type BodyType = {
    success: boolean
}

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",

})
export const API = {
    postSome(body: BodyType) {
        return instance.post("https://neko-cafe-back.herokuapp.com/auth/test", body)

    }
}