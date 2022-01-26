import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./basket.css"

const Basket = () => {
  const [products, setProducts] = useState(useSelector(state=>state.products));
  const [summa, setSumma] = useState(0);

  useEffect(() => {
    const totalSumm = products.cart.reduce((acc, curr) => {
      return acc + curr.product.price * curr.amount;
    }, 0);

    setSumma(totalSumm);
  }, [products]);

  const handleChange = (e, idx) => {
    setProducts((prevState) => ({
      ...prevState,
      ...(prevState.cart[idx].amount = +e.target.value),
    }));
  };


  return (
    <div className="basket">
        <h1>Моя корзина</h1>
        {products.cart.map((item, index) => (
            <div className="cart" key={index}>
                <div className="cart__item">
                    <div  className="basket__img"> <img src={item.product.img}/> </div>
                    <div>
                        {item.product.name}
                        <h3>{item.product.price} тг</h3>
                    </div> 
                </div>
                <div className="cart__item">
                    <input type="number" value={item.amount} className="product__amount"
                    onChange={(e) => handleChange(e, index)}
                    />
                    <div className="cart__item-price">{item.amount * item.product.price} тг</div>
                </div>
            </div>
        ))}
      <div>
        <h3>Общая сумма </h3>
        <h2>{summa}</h2>
      </div>
    </div>
  );
};

export default Basket;
