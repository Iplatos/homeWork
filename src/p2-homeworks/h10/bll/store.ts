import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore, legacy_createStore} from "redux";
import {ColorChangeReducer} from "./colorChangeReducer";

 const reducers = combineReducers({
     loading: loadingReducer,
 themeColor:ColorChangeReducer
})

 const store = legacy_createStore(reducers)

 export default store

 export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
 window.store = store // for dev
