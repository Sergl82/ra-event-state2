import './CardsView.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function CardsView({ products }) {
   return (
      <div className="cardview">
         {products.map((product) => (
            <div className="cardview-item" key={product.name + product.color}>
               <p className="cardview-item-name">
                  {product.name.toUpperCase()}
               </p>
               <p className="cardview-item-color">{product.color}</p>
               <p className="cardview-item-price">${product.price}</p>
               <button type="button" className="cardview-item-button">
                  add to cart
               </button>
               <img
                  className="cardview-item-img"
                  src={product.img}
                  alt={product.name}
               />
            </div>
         ))}
      </div>
   );
}

CardsView.propTypes = {
   products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
