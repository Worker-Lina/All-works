import React from 'react'

import styled from "styled-components"

const Gallery = ({children, ...props}) => {
    const MyUl = styled.ul`
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
    `

    const MyLi = styled.li`
        flex: 1 0 calc(${100 / props.count}% - 10px);

    `

    return (
        <MyUl>
            {props.images.map(image => (
                <MyLi >
                    <img src={image}/>
                </MyLi>
            ))}
        </MyUl>
    )
}

export default Gallery
