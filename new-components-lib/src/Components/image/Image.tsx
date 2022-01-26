import React, {FC}  from 'react'

import styled from 'styled-components'

export interface MyImageProps{
    opacity:string;
    borderRadius:string;
    border:string;
    width:string;
    height:string;
    src:string;
}

const Image:FC<MyImageProps> = ({src, borderRadius,border, width,height,opacity, ...props}) => {

    const MyImage= styled.img`
        border-radius:${borderRadius};
        border: ${border};
        width: ${width};
        height: ${height};
        opacity: ${opacity};
    `
    
    return (
        <MyImage  src={src}/>
    )
}

export default Image
