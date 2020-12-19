import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Card } from '../components';

const Home = ({ setActiveCard, categoryNames, cards, setCards }) => {
  const [findInputValue, setFindInputValue] = useState('');
  let history = useHistory();

  const onFindRestaurants = e => {
    const value = e.target.value;
    const getCards = string => axios.get(string).then(({ data }) => setCards(data));
    setFindInputValue(value);
    value === '' ? getCards('http://localhost:3001/cards') : getCards('http://localhost:3001/cards?q=' + value);
  };

  const onCardClick = keyValue => {
    history.push(`/${keyValue}`);
    const cardKey = history.location.pathname.replace('/', '');
    const card = cards && cards.find(card => card.keyValue === cardKey);
    setActiveCard(card);
  };

  return (
    <Fragment>

      <section className="promo">
        <div className="container">
          <div className="promo__inner">
            <h1 className="promo__title">Онлайн-сервис доставки еды на дом</h1>
            <p className="promo__subtitle">Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком</p>
          </div>
        </div>
      </section>

      <section className="restaurants section">
        <div className="container">
          <div className="restaurants__inner">

            <div className="restaurants__header section__header">
              <h2 className="restaurants__title section__title">Рестораны</h2>
              <div value={findInputValue} onChange={onFindRestaurants} className="restaurants__input input input--search">
                <input type="text" placeholder="Поиск блюд и ресторанов" />
              </div>
            </div>

            <ul className="cards__list">
              {cards.map(card => <Card key={card.id} {...card} categoryNames={categoryNames} onCardClick={onCardClick} />)}
            </ul>

          </div>
        </div>
      </section>

    </Fragment>
  );
};

export default Home;