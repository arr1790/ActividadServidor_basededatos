'use client'

import { useRef } from "react";

function Modal({ texto, children }) {

    const refModal = useRef();

    const openModal = () => refModal.current?.showModal();
    const cerrarModal = () => refModal.current?.close();



    return (
        <>
            <div onClick={openModal}>{texto}</div>

            <dialog ref={refModal}>
                {children}
                <div onClick={cerrarModal}>Cerrar</div>
            </dialog>
        </>

    );
}

export default Modal;