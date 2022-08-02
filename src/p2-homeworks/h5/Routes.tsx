import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Route, Routes} from "react-router-dom";
import {JuniorPlus} from "./pages/JuniorPlus";
import {Junior} from "./pages/Junior";
import {Redirect} from "./pages/Redirect";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    junior: '/junior',
    Junior_Plus: "/juniorPlus"

}

function Routers() {
    return (
        <div>
            <Routes>

{/*            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'}  element={ <Redirect />}/>



            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.junior} element={<Junior/>}/>
            <Route path={PATH.Junior_Plus} element={<JuniorPlus/>}/>


{/*
            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
*/}
            <Route path={"*"} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Routers
