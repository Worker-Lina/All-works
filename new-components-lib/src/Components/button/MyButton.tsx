import React, {FC} from 'react'
import styled from "styled-components"
export interface MyButtonProps{
    color:string;
    background: string;
    fontSize: string;
    variant:string;
    cursor:string;
    padding:string;
    border:string;
    hoverColor:string;
    hoverBackgroundColor:string;
}
const MyButton:FC<MyButtonProps> = ({children, color, background, fontSize, variant, cursor, padding, border, hoverColor, hoverBackgroundColor,  ...props}) => {
    const Button = styled.button`
        padding: 10px 25px;
        font-size: 14px;
        cursor: pointer;
        border-radius:12px;
        transition: all .2s;
        ${variant === "light" 
            ?
            `background-color: white;
            border: 1pX solid #EEEFEF;
            color: #EEEFEF;
            :hover{
                color:#ADAFAE;
                background-color:white;
                border: 1pX solid #ADAFAE;
            }`
            : variant === "dark" ?
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
        background: ${background};
        color:${color};
        font-size:${fontSize};
        padding:${padding}
        cursor:${cursor};
        border:${border};
        :hover{
            color: ${hoverColor};
            background-color: ${hoverBackgroundColor};
        }
    `

    return (
        <MyButton {...props}>
            {children}
        </MyButton>
    )
}

export default MyButton
