import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";
import s from "./HW10.module.css"
function HW10() {
    const LoadingState = useSelector<AppStoreType, initStateType>(state => state.loading)


    console.log(LoadingState)

let dispatch = useDispatch()

    const setLoading = ()=> {
        const action = loadingAC(!LoadingState.loading)
        dispatch(action)

        setTimeout(()=>{
            dispatch(loadingAC(LoadingState.loading))
        },2500)

    }

   return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {LoadingState.loading
                ? (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                ) : (
                     <div className={s.loadTitle}>{"Loading........ʕ ᵔᴥᵔ ʔ..........."}</div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
