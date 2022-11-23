import {AppStoreType} from "./store";

export type initStateType = {
    loading:boolean
}

const initState:initStateType = {
loading:true
}

type loadingReducertType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:initStateType = initState, action: loadingReducertType) => { // fix any
    switch (action.type) {

        case 'LOADING': {

            return {...state, loading: action.Loading}
        }

        default: return state
    }
}

export const loadingAC = (Loading:boolean) => {
    return {
        type: "LOADING",
        Loading

    }as const
} // fix any