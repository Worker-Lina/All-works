import React, {FC} from "react";
import styled from "styled-components"

export interface MyPaginationProps{
    page:number;
    changePage:any;
    backgroundColor:string;
    totalPages:[];
}

const Pagination:FC<MyPaginationProps> = ({page, changePage, backgroundColor,totalPages, ...props}) =>{
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
            background-color: ${backgroundColor ? backgroundColor : "#00ACFF"};
        }
    }
    span.active{
        background-color:${backgroundColor ? backgroundColor : "#00ACFF"};
    }
    `
 
    return(
        <PageWrapper>
            {totalPages.map(p =>
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