import React, {FC} from "react";
import styled from "styled-components"

export interface MyModalProps{
    visible:any;
    setVisible:any;
    backgroundModal:any;
    backgroundContent:any;
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible,backgroundModal,backgroundContent, ...props}) =>{
    const Modal = styled.div`
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: ${backgroundModal ? backgroundModal : "rgba(0,0,0,0.5)"};
        ${visible ? `    
            display: flex;
            justify-content: center;
            align-items: center;` 
        : `display: none`}
    `
    const ModalContent = styled.div`
        padding:25px;
        background-color: ${backgroundContent ? backgroundContent : "white"};
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