import React from 'react'
import HW5 from '../../../p2-homeworks/h5/HW5'
import './App.css'
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../p2-homeworks/h10/bll/store";
import {StateType} from "../../../p2-homeworks/h10/bll/colorChangeReducer";


function App() {
    const Theme = useSelector<AppStoreType, StateType>(state=>state.themeColor)
    return (

        <div className={Theme.isDarkTheme ? "AppBackGroundColorDark": "AppBackGroundColorWhite"}>react homeworks:
            {/*   <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>*/}
            <HW5/>

        </div>
    )
}

export default App
