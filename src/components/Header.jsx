import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components';

import logo from '../assets/img/logo.svg';

const Header = ({ setCartOpen }) => {
  const onOpenCart = () => {
    setCartOpen(true);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">

          <Link to="/" className="header__logo logo">
            <img src={logo} alt="Delivery Food" />
          </Link>

          <div className="header__input input input--address">
            <input type="text" placeholder="Адрес доставки" />
          </div>

          <div className="header__btns">
            <Button login>Войти</Button>
            <Button onOpenCart={onOpenCart} white cart>Корзина</Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;