import React from "react";

import styled from 'styled-components'

const MyButton = ({children, ...props}) =>{
    
    const Button = styled.button`
        padding: 10px 25px;
        font-size: 14px;
        cursor: pointer;
        border-radius:12px;
        transition: all .2s;
        ${props.variant === "light" 
            ?
            `background-color: white;
            border: 1pX solid #EEEFEF;
            color: #EEEFEF;
            :hover{
                color:#ADAFAE;
                background-color:white;
                border: 1pX solid #ADAFAE;
            }`
            : props.variant === "dark" ?
            `background-color: black;
            border: 1pX solid black;
            color: white;
            :hover{
                color:black;
                background-color:white;
            }`: ``
        }
    ` 
    const MyButton=styled(Button)`
        background: ${props.background};
        color:${props.color};
        font-size:${props.fontSize};
        padding:${props.padding}
        cursor:${props.cursor};
        border:${props.border};
        :hover{
            color: ${props.hoverColor};
            background-color: ${props.hoverBackgroundColor};
        }
    `

    return (
        <MyButton >
            {children}
        </MyButton>
    );
};

export default MyButton;