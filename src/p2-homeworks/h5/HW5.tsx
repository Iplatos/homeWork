import React from 'react'
import Header from './Header'
import Routers from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>

            <HashRouter>

                <Header/>

                <Routers/>

            </HashRouter>
        </div>
    )
}

export default HW5
