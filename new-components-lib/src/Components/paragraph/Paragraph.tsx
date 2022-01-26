import React, {FC} from 'react';

import styled from 'styled-components'

export interface MyParagraphProps{
    color: string;
    fontSize:string;
    fontWeight:string;
}

const Paragraph:FC<MyParagraphProps> = ({children, color, fontSize, fontWeight}) => {
    const Text = styled.p`
    color:${color};
    font-size:${fontSize};
    font-weight:${fontWeight}
`
return (
    <Text>
        {children}
    </Text>
)
};

export default Paragraph;



