import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <Link to="/" className="footer__logo logo">
            <img src={logo} alt="Delivery Food" />
          </Link>

          <nav className="footer__nav nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/partners" className="nav__link">Ресторанам</Link>
              </li>
              <li className="nav__item">
                <Link to="/couriers" className="nav__link">Курьерам</Link>
              </li>
              <li className="nav__item">
                <Link to="/press" className="nav__link">Пресс-центр</Link>
              </li>
              <li className="nav__item">
                <Link to="/contacts" className="nav__link">Контакты</Link>
              </li>
            </ul>
          </nav>

          <ul className="footer__socials socials">
            <li className="socials__item">
              {/* eslint-disable-next-line */}
              <a href="https://www.instagram.com/" className="socials__link socials__link--instagram" aria-label="Instagram" />
            </li>
            <li className="socials__item">
              {/* eslint-disable-next-line */}
              <a href="https://www.facebook.com/" className="socials__link socials__link--facebook" aria-label="Facebook" />
            </li>
            <li className="socials__item">
              {/* eslint-disable-next-line */}
              <a href="https://vk.com/" className="socials__link socials__link--vk" aria-label="VK" />
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;