import {useState} from "react";
import {ToDoModal} from "../../components";
import {ToDoListHeader} from "./components/ToDoListHeader";
import {List} from "./components/List";

const initialState = {
    list: [],
    isOpen: false,
    isEdit: false,
    isDel: false,
}

export const ToDoListPage  = () =>{
    const [state, setState] = useState(initialState)
    const {list, isOpen, isEdit, isDel}= state
    const addFunc = () => {
    const listClone =JSON.parse(JSON.stringify(list))
        listClone.push()
        setState(...(prevState) => ({...prevState, list: listClone}))
    }

    const handleModal = (value) => {
        if (value === "open") {
            setState((prevState) => ({ ...prevState, isOpen: true }))
        } else if  (value === "close") {
            setState((prevState) => ({ ...prevState, isOpen: false }))
        }
    }

    /*  const del = () => {
  const listClone = JSON.parse(JSON.stringify(list))
  listClone.splice(value, 1)
  setState((prevState) => ({ ...prevState, list: listClone }))
}*/

    const openDelModal = () => {
        setState((prevState) => ({ ...prevState, isDel: true, isEdit: false }));
        handleModal("open");
    };

    return (
        <div>
            <ToDoModal
            isOpen={isOpen}
            handleModal={handleModal}
            isEdit={isEdit}
            isDel={isDel}
            />
            <ToDoListHeader addFunc={addFunc} />
            <List list={list} del={openDelModal} />
        </div>
    )
}