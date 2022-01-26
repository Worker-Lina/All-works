import React, {FC} from 'react'

import styled from 'styled-components'

export interface MyLinkProps{
    background:string;
    border:string;
    fontSize:string;
    color:string;
    textDecoration:string;
    href:any;
}

const Link:FC<MyLinkProps> = ({children, textDecoration, color, fontSize, border, background,href, ...props}) => {

    const MyLink= styled.a`
        text-decoration:${textDecoration};
        color:${color};
        font-size:${fontSize};
        border:${border};
        background:${background};
    `

    return (
        <MyLink href={href}>
            {children}
        </MyLink>
    )
}

export default Link
