import React, {FC} from 'react'

import styled from 'styled-components'

export interface MyHeadingProps{
    fontSize:string;
    fontWeight:string;
    color:string;
    textAlign:string;
}

const Heading:FC<MyHeadingProps> = ({children, fontSize, fontWeight, color, textAlign, ...props}) => {
    const Component = styled.p`
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        color: ${color};
        text-align: ${textAlign};
    `
    return (
        <Component >
            {children}
        </Component>
    )
}

export default Heading
