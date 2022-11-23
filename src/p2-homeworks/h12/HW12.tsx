import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {StateType, ThemeChangerAC} from "../h10/bll/colorChangeReducer";
import Switch from "@mui/material/Switch";


function HW12() {
    const dispatch = useDispatch()
    const theme = 'some'; //

    const ThemeColor = useSelector<AppStoreType,StateType >(state=> state.themeColor)
    const onChangeCallback = () => {
        dispatch(ThemeChangerAC(ThemeColor.isDarkTheme))
    }


    // useDispatch, onChangeCallback

    return (
        <div style={ThemeColor.isDarkTheme ?{ backgroundColor:"black"}:{ backgroundColor:"white"} } className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div>
                <span style ={ThemeColor.isDarkTheme ?{ color: "white"}: {color:"black"}}>Dark Theme</span>
                <Switch  defaultChecked onChange={onChangeCallback} size="small" />
                </div>

            <hr/>
        </div>
    );
}

export default HW12;
