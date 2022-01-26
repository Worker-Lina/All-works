import React from "react";

import styled from 'styled-components'

const MyInput = React.forwardRef((props,ref) =>{
    const Input = styled.input`
        width: 100%;
        padding: 10px 15px;
        margin: 5px 0;
        border: 1px solid black;
        border-radius:10px;
        outline:none;
        ${props.variant === "light" ?
            `
            background-color: white;
            border: 1pX solid #EEEFEF;
            color: #EEEFEF;
            `
            : props.variant === "dark" ?
            `background-color: black;
            border: 1pX solid black;
            color: white;
            `: ``
        }
    `
    const NewInput = styled(Input)`
        width: ${props.width};
        padding:${props.padding};
        margin: ${props.margin};
        border: ${props.border};
    `

 
    return (
        <NewInput ref={ref} />
    );
});

export default MyInput;