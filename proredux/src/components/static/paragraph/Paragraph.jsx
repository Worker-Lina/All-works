import React from 'react'

import styled from 'styled-components'

const Paragraph = ({children, ...props}) => {
    const Text = styled.p`
        color:${props.color};
        font-size:${props.fontSize};
        font-weight:${props.fontWeight}
    `
    return (
        <Text>
            {children}
        </Text>
    )
}

export default Paragraph
