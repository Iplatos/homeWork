import {PeopleType} from "../HW8";

export const homeWorkReducer = (state: PeopleType[], action: Reducertype): PeopleType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {

            let stateCopy = [...state].sort((a,b) => {
                if (a.name>b.name){
                    return 1
                } else if (a.name<b.name){
                    return -1
                }else {
                    return 0
                }
            })
            /*[...state.sort((a: PeopleType, b: PeopleType) => a.age - b.age)]*/
            return action.payload === "up" ? stateCopy : stateCopy.reverse()

        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}

type Reducertype = SortPeopleDownACType | SortPeopleACType | CheckPeopleACType

type SortPeopleDownACType = ReturnType<typeof SortPeopleDownAC>

const SortPeopleDownAC = () => {
    return {
        type: 'sort',
        payload : "down"
    } as const
}

type SortPeopleACType = ReturnType<typeof SortPeopleUpAC>
export const SortPeopleUpAC = () => {
    return {
        type: 'sort',
        payload: "up"
    } as const
}
type CheckPeopleACType = ReturnType<typeof CheckPeopleAC>
const CheckPeopleAC = () => {
    return {
    type: 'check',
        payload: 18
    }as const
}