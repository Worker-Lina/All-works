import React from "react";

import styled from "styled-components"

const MySelect = ({options, defaultValue, value, onChange})=>{
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