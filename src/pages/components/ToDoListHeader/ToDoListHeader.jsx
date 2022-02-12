import {useState} from "react";


const initialState = {
    inputValue: "",
}

export const ToDoListHeader = ({addFunc}) => {
    const [state, setState] = useState(initialState)
    const {inputValue} = state
    const inputChange = (value) => {
        setState((prevState) => ({prevState, inputValue: value}))
    }
    const func2 = () => {
        addFunc(inputValue)
        setState((prevState) => ({prevState, inputValue: ""}))
    }
    return (
        <div>
            <input
                value={inputValue}
                onChange={(e) => inputChange(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && func2()}
            />
            <button onClick={func2}></buttonon>
        </div>
    )
}