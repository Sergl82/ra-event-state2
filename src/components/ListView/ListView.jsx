import './ListView.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ListView({ products }) {
   return (
      <div className="listview">
         {products.map((product) => (
            <div className="listview-item" key={product.name + product.color}>
               <img
                  className="listview-item-img"
                  src={product.img}
                  alt={product.name}
               />
               <div className="listview-item-name">
                  {product.name.toUpperCase()}
               </div>
               <div className="listview-item-color">{product.color}</div>
               <div className="listview-item-price">${product.price}</div>
               <button type="button" className="listview-item-button">
                  add to cart
               </button>
            </div>
         ))}
      </div>
   );
}

ListView.propTypes = {
   products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
