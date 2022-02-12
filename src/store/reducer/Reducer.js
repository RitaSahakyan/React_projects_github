import {CHANGE_NAME} from "../action";


const initialState = {
    name:"Reducer"
}

export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NAME:
            return {...state, name:"new Reducer"}
        default:
            return state
    }
}