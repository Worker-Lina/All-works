import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from '../Slider/Slider';

import './product.css';

const Product = ({product}) => {
    const [active, setActive]=useState(false)
    const [counter, setCounter]=useState(0)
    const state = useSelector(state => state.products)

    const addToCart=() =>{
        if(counter<=0){
            alert("Количество некорректно")
            return
        }
        const order = {product: product, amount:counter}
        state.cart.push(order)
        console.log("add ", state)
    }

    const deleteFromCart = (id) => {
        state.cart.forEach(item =>{
            if(item.product.id === id){
                state.cart.splice(state.cart.indexOf(item),1);
                console.log("remove ", state)
            }
        })
        setActive(!active)
    }
    
    const changeBtn = () => {
        if(counter > 0){
            setActive(!active)
        }
    }

    return (
        <div className="body">
        <div className="product__container">
            <div className="wrapper">
                <Slider images={product.images}/>
                <div className="flex">
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                </div>
                <div>
                    {product.description}
                </div>
                <div>
                    {product.count}
                </div>
                <div>{product.category}</div>
                <div className="flex">
                    <div className="counter">
                        <span className="block" onClick={()=>setCounter(counter-1)}>-</span>
                        <input type="number" className="counter__input" value={counter}
                            onChange={e=>setCounter(e.target.value)}
                        />
                        <span className="block" onClick={()=>setCounter(counter+1)}>+</span>
                    </div>
                    <button 
                        onClick={() => {changeBtn(); {active ? deleteFromCart(product.id) : addToCart()  }}}
                    >{active ? "Убрать из корзины" : "Добавить в корзину"}</button>
                </div>
            </div>
        </div>
                    
        </div>
    )
}

export default Product
