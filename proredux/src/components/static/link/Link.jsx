import React from 'react'

import styled from 'styled-components'

const Link = ({children, ...props}) => {

    const MyLink= styled.a`
        text-decoration:${props.textDecoration};
        color:${props.color};
        font-size:${props.fontSize};
        border:${props.border};
        background:${props.background};
    `

    return (
        <MyLink href={props.href}>
            {children}
        </MyLink>
    )
}

export default Link
