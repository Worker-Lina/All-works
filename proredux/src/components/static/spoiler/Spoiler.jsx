import React from 'react'

import styled from "styled-components"

const Spoiler = ({children, ...props}) => {
    const MySpoiler = styled.details`
        padding:15px;
        border: 1px solid black;
        font-size: 20px;
        border-radius:12px;
        cursor:pointer;
        transition: all 0.3s;
        ${props.variant === "light" ?
        `background-color: white;
            border: 1pX solid #EEEFEF;
            color: #EEEFEF;
            :hover{
                color:#ADAFAE;
                background-color:white;
                border: 1pX solid #ADAFAE;
            }
        `
        : props.variant === "dark" ?
        `background-color: black;
            border: 1pX solid black;
            color: white;
            :hover{
                color:black;
                background-color:white;
            }
        ` : ``
        }
        :hover{
            box-shadow:-1px 0px 7px 0px rgba(50, 50, 50, 0.75);
        }
    `

    return (
        <MySpoiler>
            <summary>{props.summary}</summary> 
            {children}
        </MySpoiler>
    )
}

export default Spoiler
