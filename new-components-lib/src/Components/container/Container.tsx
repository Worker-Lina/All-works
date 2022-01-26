import React, {FC} from 'react'

import styled from 'styled-components'

export interface MyContainerProps{
    gridTemplateColumns:string;
    gridGap:string;
    gridTemplateRows:string;
}

const Container:FC<MyContainerProps> = ({gridTemplateColumns, gridTemplateRows, gridGap, children, ...props}) => {
    const Con1 = styled.div`
        display: grid;
        grid-template-columns: ${ gridTemplateColumns ? gridTemplateColumns : '33% 33% 33%'};
        grid-template-rows: ${ gridTemplateRows ? gridTemplateRows : '100%'};
        grid-gap: ${gridGap ? gridGap : '0.5rem'};
    `
    return (
        <Con1 >
            {children}
        </Con1>
    )
}

export default Container
