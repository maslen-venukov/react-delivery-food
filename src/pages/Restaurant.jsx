import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Product } from '../components';

const Restaurant = ({ name, stars, price, categories, products, categoryNames, cards, setActiveCard, cart, setCart }) => {
  let history = useHistory();

  useEffect(() => {
    const cardKey = history.location.pathname.replace('/', '');
    const card = cards && cards.find(card => card.keyValue === cardKey);
    setActiveCard(card);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [history.location.pathname, cards]);

  return (
    <section className="restaurant section">
      <div className="container">
        <div className="restaurant__inner">

          <div className="restaurant__header section__header">
            <h1 className="restaurant__title section__title">{name}</h1>
            <div className="card-info">
              <div className="card-info__body">
                <span className="card-info__stars">{stars}</span>
                <span className="card-info__price">От {price} ₽</span>
                <span className="card-info__category">
                {categoryNames.length > 0 && categories && categories.map((categoryId, index) => {
                  const categoryName = categoryNames.find(category => category.id === categoryId).name;
                  return index !== 0 ? `, ${categoryName}`.toLowerCase() : categoryName;
                })}
                </span>
              </div>
            </div>
          </div>

          <ul className="cards__list">
            {products && products.map(product => <Product key={product.name} {...product} cart={cart} setCart={setCart} />)}
          </ul>

        </div>
      </div>
    </section>
  );
};

export default Restaurant;