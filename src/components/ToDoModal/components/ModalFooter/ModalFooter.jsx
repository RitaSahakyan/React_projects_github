export const ModalFooter = ({ modalCloseFunc, children }) => {
    return (
        <div>
            <button>{children}</button>
            <button onClick={() => modalCloseFunc("close")}>close</button>
        </div>
    );
};
