import React from "react";
import styled from "styled-components"

const Pagination = ({page, changePage, ...props}) =>{

    const Span = styled.span`
    padding:15px 20px;
    border:1px solid #D8D8D8;
    border-radius:6px;
    cursor:pointer;
    transition:all .2s;
    :hover{
        background-color:#00ACFF;
    }
    .active{
        background-color:#00ACFF;
    }
    `

    const PageWrapper = styled.div`
    span {
        padding:15px 20px;
        border:1px solid #D8D8D8;
        border-radius:6px;
        cursor:pointer;
        transition:all .2s;
        :hover{
            background-color: ${props.backgroundColor ? props.backgroundColor : "#00ACFF"};
        }
    }
    span.active{
        background-color:${props.backgroundColor ? props.backgroundColor : "#00ACFF"};
    }
    `
 
    return(
        <PageWrapper>
            {props.totalPages.map(p =>
            <span 
                onClick={()=> changePage(p)}
                key={p} 
                className={page === p ? 'active' :''}
                >{p}
            </span>
            )}
        </PageWrapper>
    );

};

export default Pagination;