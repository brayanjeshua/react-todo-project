import React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoContext } from '../TodoContext';

function Modal( { children }) {

    const { setOpenModal } = React.useContext(TodoContext);

    const onClosePopup = () => {
        setOpenModal(false);
    }
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="content">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };