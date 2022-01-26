import React from 'react'

import styled from 'styled-components'

const Image = ({...props}) => {

    const MyImage= styled.img`
        border-radius:${props.borderRadius};
        border: ${props.border};
        width: ${props.width};
        height: ${props.height};
        opacity: ${props.opacity};
    `
    
    return (
        <MyImage  src={props.src}/>
    )
}

export default Image
