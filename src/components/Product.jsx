import React from 'react';

import { Button } from '../components';

const Product = ({ img, name, descr, price, cart, setCart }) => {
  const onAddToCart = () => {
    if(!cart.find(item => item.name === name)) {
      const newCartItem = {
        name,
        price,
        quantity: 1
      };
      setCart([ ...cart, newCartItem ]);
    };
  };

  let isDisabled = false;
  cart.forEach(product => {
    if(product.name === name) {
      isDisabled = true;
    };
  })

  return (
    <li className="cards__item card">
      <div className="card__img">
        <img src={img} alt={name} />
      </div>
      <div className="card__info card-info">
        <div className="card-info__header">
          <h3 className="card-info__name card-info__name--product">
            <span className="card-info__link">{name}</span>
          </h3>
        </div>
        <div className="card-info__body">
          <span className="card-info__descr">{descr}</span>
        </div>
        <div className="card-info__bottom">
          <Button onAddToCart={onAddToCart} classes="card-info__btn" toCart isDisabled={isDisabled}>В корзину</Button>
          <span className="card-info__bottom-price">{price} &#8381;</span>
        </div>
      </div>
    </li>
  );
};

export default Product;