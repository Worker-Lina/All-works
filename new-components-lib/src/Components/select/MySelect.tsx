import React, {FC} from "react";

import styled from "styled-components"

export interface MySelectProps{
    options:[{value:string, name:string}];
    defaultValue:any;
    value:any;
    onChange:any;
}

const MySelect:FC<MySelectProps> = ({options, defaultValue, value, onChange})=>{
    const Select = styled.select`
        background-color:green;
    `
    return(
        <Select 
            value={value}
            onChange={event=>onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </Select>
    );
};

export default MySelect;