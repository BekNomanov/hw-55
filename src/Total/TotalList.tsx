import React from 'react';
import type {TotalPriceProps} from '../type';


const TotalPrice: React.FC<TotalPriceProps> = ({ ingredients, basePrice }) => {
  const calculateTotalPrice = (): number => {
    const ingredientsPrice = ingredients.reduce((total, ing) => {
      return total + ing.price * ing.count;
    }, 0);

    return basePrice + ingredientsPrice;
  };

  return <strong>Total Price: {calculateTotalPrice().toFixed(2)}som</strong>;
};

export default TotalPrice;
