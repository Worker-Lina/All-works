import React from 'react'

import styled from 'styled-components'

const Container = ({children, ...props}) => {
    const Con1 = styled.div`
        display: grid;
        grid-template-columns: ${props => props.gridTemplateColumns || '33% 33% 33%'}';
        grid-template-rows: ${ props=> props.gridTemplateRows || '100%'};
        grid-gap: ${props => props.gridGap ||  '0.5rem'};
    `
    return (
        <Con1 >
            {children}
        </Con1>
    )
}

export default Container
