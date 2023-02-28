import React from 'react';
import * as ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div>
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };