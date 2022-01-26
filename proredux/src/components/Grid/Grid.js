import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const Grid = ({countOnRow, totalCount}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.products)
    const [fetching, setFetching] = useState(false)
    const [total, setTotal] = useState(totalCount) 
    const [startPage, setStartPage] = useState(0) 
    const [items, setItems] = useState([])
    let finalProducts = [];

    if(state.filter instanceof Array){
        state.filter.forEach(item=>{
            if(item.type == "function"){
                finalProducts = item.criteria.action.call(
                    [...state.products],
                    item.criteria.discerner
                );
            }
        });
        state.filter.forEach(item=>{
            if(item.type == "property"){
                let criteria = item.criteria;
                if(criteria.value instanceof Array){
                    finalProducts = finalProducts.filter(item => criteria.value.includes(item[criteria.prop]))
                }
                else if(criteria.prop && criteria.value){
                    finalProducts = finalProducts.filter(item=>item[criteria.prop]==criteria.value);
                }else{
                    finalProducts = finalProducts;
                }    
            }
        })
    }else{  
        switch(state.filter.type){
            case "function":
                finalProducts = state.filter.criteria.action.call(
                    [...state.products],
                    state.filter.criteria.discerner
                );
                break;
            case "property":
                let criteria = state.filter.criteria;
                if(criteria.value instanceof Array){
                    finalProducts = state.products.filter(item => criteria.value.includes(item[criteria.prop]))
                }
                else if(criteria.prop && criteria.value){
                    finalProducts = state.products.filter(item=>item[criteria.prop]==criteria.value);
                }else{
                    finalProducts = state.products;
                }    
                break;
        }
    }


    useEffect(() => {
        if(fetching){
            setTotal(total+totalCount);
            setFetching(false);
        }
        
    }, [fetching])

    useEffect(()=>{
        document.addEventListener('scroll', scrollHandler);

        return function(){
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])


    const scrollHandler=(e)=>{
        if(e.target.documentElement.scrollHeight-(e.target.documentElement.scrollTop+window.innerHeight)<100){
            setFetching(true)
        }
    }

    return (
        <div className="container" >
            <div className="grid" style={{gridTemplateColumns: `repeat(${countOnRow}, 1fr)`}}>
                {finalProducts.slice(0,total).map(product => 
                        <div key={product.id} className="product">
                            <div>{product.name}</div>
                            <div><img src={product.img} /></div>
                        <div>{product.brand} {product.price}</div>
                    </div>  
                )}
                
            </div>
        </div>
    )
}

export default Grid
