import {CHANGE_NAME} from "../action";


const initialState = {
    name:"test name 55"
}

export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_NAME:
            return {...state, name:"new name "}
        default:
            return state
    }
}