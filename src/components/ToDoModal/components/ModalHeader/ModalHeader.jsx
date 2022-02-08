export const ModalHeader = ({ modalCloseFunc, children }) => {
    return (
        <div>
            <span>To {children}</span>
            <button onClick={() => modalCloseFunc("close")}>close</button>
        </div>
    );
};
