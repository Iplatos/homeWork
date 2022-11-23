


type ActionType = ReturnType <typeof ThemeChangerAC>

const state:StateType = {
    isDarkTheme:false as boolean
}
export type StateType = {
    isDarkTheme: boolean
}


export const ColorChangeReducer = (state: StateType, action:ActionType)=> {
 switch (action.type){
     case "DARK":
         return {...state, isDarkTheme: !action.color}
     default:
         return {...state}
 }

}
export const ThemeChangerAC = (color:boolean) => {
    return {type:"DARK", color}as const
}