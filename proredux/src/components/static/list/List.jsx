import React from 'react'

import styled from 'styled-components'

const List = ({children, ...props}) => {
    const MyList = styled.ul`
        list-style-type: ${props.listStyleType};
        list-style-image: ${props.listStyleImage};
        list-style-position: ${props.listStylePosition};
        font-style:${props.fontStyle};
    `

    return (
        <MyList>
            {children}
        </MyList>
    )
}

export default List
