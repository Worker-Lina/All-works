import React, {FC} from 'react'

import styled from 'styled-components'

export interface MyListProps{
    listStyleType:string;
    listStyleImage:string;
    listStylePosition:string;
    fontStyle:string;
}

const List:FC<MyListProps> = ({children, listStyleType, listStyleImage, listStylePosition, fontStyle, ...props}) => {
    const MyList = styled.ul`
        list-style-type: ${listStyleType};
        list-style-image: ${listStyleImage};
        list-style-position: ${listStylePosition};
        font-style:${fontStyle};
    `

    return (
        <MyList>
            {children}
        </MyList>
    )
}

export default List
