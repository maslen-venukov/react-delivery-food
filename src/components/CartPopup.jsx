import React, { useState, useEffect } from 'react';

import { Button } from '../components';

const CartPopup = ({ cart, setCart, setCartOpen }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const countTotalPrice = () => {
    let price = 0;
    cart.length === 0 ? price = 0 : cart.forEach(product => price += product.price * product.quantity);
    setTotalPrice(price);
  };

  useEffect(() => {
    countTotalPrice(); // eslint-disable-next-line
  }, [cart]);

  const onCloseCart = () => {
    setCartOpen(false);
  };

  const onPlus = e => {
    const name = e.target.closest('.popup-item').querySelector('.popup-item__name').textContent;
    const oldProduct = cart.find(product => product.name === name);
    const newCart = cart.map(product => product.name === oldProduct.name ? { ...product, quantity: ++oldProduct.quantity } : product);
    setCart(newCart);
  };

  const onMinus = e => {
    const name = e.target.closest('.popup-item').querySelector('.popup-item__name').textContent;
    const oldProduct = cart.find(product => product.name === name);
    oldProduct.quantity === 1
    ? setCart(cart.filter(product => product.name !== oldProduct.name))
    : setCart(cart.map(product => product.name === oldProduct.name ? { ...product, quantity: --oldProduct.quantity } : product));
  };

  return (
    <div className="popup popup--cart">
      <div className="popup__inner">

        <div className="popup__header section__header">
          <h2 className="popup__title section__title">Корзина</h2>
          <button onClick={onCloseCart} className="popup__close" aria-label="Закрыть корзину" />
        </div>

        <ul className="popup__list">
          {
            cart.length === 0
            ? <li className="popup__item popup-item empty-cart">Корзина пуста</li>
            : cart && cart.map(({ name, price, quantity }) => (
              <li key={name} className="popup__item popup-item">
                <span className="popup-item__name">{name}</span>
                <span className="popup-item__price">{price} ₽</span>
                <div className="popup-item__counter">
                  <Button onMinus={onMinus} blueBorder>-</Button>
                  <span className="popup-item__quantity">{quantity}</span>
                  <Button onPlus={onPlus} blueBorder>+</Button>
                </div>
              </li>
            ))
          }
        </ul>
    
        <div className="popup__bottom">
          <div className="popup__total-price">{totalPrice} ₽</div>
          <div className="popup__btns">
            <Button>Оформить заказ</Button>
            <Button onCloseCart={onCloseCart} white>Отмена</Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPopup;