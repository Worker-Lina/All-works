import React from "react";
import styled from "styled-components"

const MyModal = ({children, visible, setVisible, ...props}) =>{
    const Modal = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${props.backgroundModal ? props.backgroundModal : "rgba(0,0,0,0.5)"};
        ${visible ? `    
            display: flex;
            justify-content: center;
            align-items: center;` 
        : `display: none`}
    `
    const ModalContent = styled.div`
        padding:25px;
        background-color: ${props.backgroundContent ? props.backgroundContent : "white"};
        border-radius: 16px;
        min-width: 250px;
    `
    return (
        <Modal onClick={()=>setVisible(false)}>
            <ModalContent onClick={(e)=> e.stopPropagation()}>
                {children}
            </ModalContent>
        </Modal>
    );
};

export default MyModal;