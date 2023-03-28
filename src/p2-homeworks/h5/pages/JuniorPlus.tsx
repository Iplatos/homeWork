import React from 'react'
import HW11 from "../../h11/HW11";
import HW12 from "../../h12/HW12";
import {Provider} from "react-redux";
import store from "../../h10/bll/store";
import {Request} from "../../h13/Request";

export const JuniorPlus = () => {
    return (
        <Provider store={store}><HW11/>
            <HW12/>
            <Request/>

        </Provider>
    )
}

