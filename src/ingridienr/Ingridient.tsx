import React from 'react';
import type { BurgerIngredient } from '../type';

interface BurgerComponentProps {
  ingredients: BurgerIngredient[];
}

const BurgerComponent: React.FC<BurgerComponentProps> = ({ ingredients }) => {
  const renderIngredients = () => {
    const ingredientsToRender = ingredients.filter((ing) => ing.count > 0);

    return ingredientsToRender.map((ing) => {
      const ingredientClass = ing.name.toString();
      return <div key={ing.id} className={ingredientClass}></div>;
    });
  };

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {renderIngredients()}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default BurgerComponent;