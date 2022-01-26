import React from 'react'

import styled from 'styled-components'

const Heading = ({children, ...props}) => {
    const Component = styled.p`
        font-size: ${props.fontSize};
        font-weight: ${props.fontWeight};
        color: ${props.color};
        text-align: ${props.textAlign};
    `
    return (
        <Component >
            {children}
        </Component>
    )
}

export default Heading
