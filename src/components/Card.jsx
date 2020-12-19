import PropTypes from 'prop-types';

const Card = ({ keyValue, img, name, time, stars, price, categories, categoryNames, onCardClick }) => {
  return (
    <li className="cards__item card">
      <button onClick={() => onCardClick(keyValue)} className="card__img">
        <img src={img} alt={name} />
      </button>
      <div className="card__info card-info">
        <div className="card-info__header">
          <h3 className="card-info__name">
            <span className="card-info__link">{name}</span>
          </h3>
          <time className="card-info__time">{time} мин</time>
        </div>
        <div className="card-info__body">
          <span className="card-info__stars">{stars}</span>
          <span className="card-info__price">От {price} &#8381;</span>
          <span className="card-info__category">
            {categoryNames.length > 0 && categories.map((categoryId, index) => {
              const categoryName = categoryNames.find(category => category.id === categoryId).name
              return index !== 0 ? `, ${categoryName}`.toLowerCase() : categoryName;
            })}
          </span>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.number).isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Card;