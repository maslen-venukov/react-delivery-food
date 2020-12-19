import React from 'react';
import classNames from 'classnames';

const Button = ({ children, classes, white, login, cart, toCart, blueBorder, onOpenCart, onCloseCart, onAddToCart, onPlus, onMinus, isDisabled }) => {
  const onBtnClick = e => {
    onOpenCart && onOpenCart();
    onCloseCart && onCloseCart();
    onAddToCart && onAddToCart();
    onPlus && onPlus(e);
    onMinus && onMinus(e);
  };

  return (
    <button onClick={onBtnClick} disabled={isDisabled} className={classNames('btn', classes, { 'btn--white': white }, { 'btn--login': login }, { 'btn--cart': cart }, { 'btn--to-cart': toCart }, { 'btn--blue-border': blueBorder })}>
      {children}
    </button>
  );
};

export default Button;