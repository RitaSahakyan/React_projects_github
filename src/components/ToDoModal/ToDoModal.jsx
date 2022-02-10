import Modal from "react-modal";
import { ModalHeader } from "./components/ModalHeader";
import { ModalFooter } from "./components/ModalFooter";

export const ToDoModal = ({ isOpen, handleModal, isDel, isEdit }) => {
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };

    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <ModalHeader modalCloseFunc={handleModal}>
                {isDel ? "do you want to delete" : null}
                {isEdit ? "Edit" : null}
            </ModalHeader>

            {isDel ? <h1>do you want to delete</h1> : null}
            {isEdit ? <h1>Edit</h1> : null}

            <h1>body</h1>
            <ModalFooter modalCloseFunc={handleModal}>
                {isDel ? "Delete" : null}
                {isEdit ? "Save" : null}
            </ModalFooter>
        </Modal>
    );
};
