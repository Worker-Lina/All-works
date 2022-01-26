import React, {FC} from 'react';
import styled from 'styled-components'


export interface MyInputProps{
    variant:string;
    width:string;
    padding:string;
    margin:string;
    border:string;
    ref:any;
}

const MyInput:FC<MyInputProps> = ({variant, ref, width, padding, margin, border, ...props}) => {
    const Input = styled.input`
        width: 100%;
        padding: 10px 15px;
        margin: 5px 0;
        border: 1px solid black;
        border-radius:10px;
        outline:none;
        ${variant === "light" ?
            `
            background-color: white;
            border: 1pX solid #EEEFEF;
            color: #EEEFEF;
            `
            : variant === "dark" ?
            `background-color: black;
            border: 1pX solid black;
            color: white;
            `: ``
        }
    `
    const NewInput = styled(Input)`
        width: ${width};
        padding:${padding};
        margin: ${margin};
        border: ${border};
    `
  return <NewInput ref={ref}> </NewInput>;
};

