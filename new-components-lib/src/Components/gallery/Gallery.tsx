import React, {FC} from 'react'

import styled from "styled-components"

export interface MyGalleryProps{
    images: Array<any>;
    count:number;
}

const Gallery:FC<MyGalleryProps> = ({children, images, count, ...props}) => {
    const MyUl = styled.ul`
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          list-style: none;
    `

    const MyLi = styled.li`
        flex: 1 0 calc(${100 / count}% - 10px);
    `

    return (
        <MyUl>
            {images.map(image => (
                <MyLi >
                    <img src={image}/>
                </MyLi>
            ))}
        </MyUl>
    )
}

export default Gallery
