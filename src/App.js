import { Fragment, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header, Footer, CartPopup } from './components';
import { Home, Restaurant } from './pages';

const App = () => {
  const [cards, setCards] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [activeCard, setActiveCard] = useState({});
  const [isCartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/cards').then(({ data }) => setCards(data));
    axios.get('http://localhost:3001/categories').then(({ data }) => setCategoryNames(data));
  }, []);

  useEffect(() => {
    document.body.addEventListener('keydown', e => isCartOpen && e.key === 'Escape' && setCartOpen(false));
  }, [isCartOpen]);

  return (
    <Fragment>
      <Header setCartOpen={setCartOpen} />

      <main className="main">
        <Route exact path="/">
          <Home categoryNames={categoryNames} activeCard={activeCard} setActiveCard={setActiveCard} cards={cards} setCards={setCards} />
        </Route>

        <Route path="/:keyValue">
          <Restaurant setCartOpen={setCartOpen} {...activeCard} setActiveCard={setActiveCard} categoryNames={categoryNames} cards={cards} cart={cart} setCart={setCart} />
        </Route>

        <Route path="/partners"><div className="container">Ресторанам</div></Route>
        <Route path="/couriers"><div className="container">Курьерам</div></Route>
        <Route path="/press"><div className="container">Пресс-центр</div></Route>
        <Route path="/contacts"><div className="container">Контакты</div></Route>

        {isCartOpen && <CartPopup cart={cart} setCart={setCart} setCartOpen={setCartOpen} />}
      </main>

      <Footer />
    </Fragment>
  );
};

export default App;