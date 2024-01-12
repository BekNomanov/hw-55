import React, { useState } from 'react';
import { INGREDIENTS } from './constant';
import AddButton from '../Buttons/AddButton';
import DeleteButton from '../Buttons/DeleteButton';
import TotalPrice from '../Total/TotalList';
import BurgerComponent from '../ingridienr/Ingridient';
import type { BurgerIngredient } from '../type';

const Burger: React.FC = () => {
  const [burgerIngredients, setBurgerIngredients] = useState<BurgerIngredient[]>(INGREDIENTS);

  const handleAddIngredient = (ingredientName: string): void => {
    const updatedIngredients = burgerIngredients.map((ing) =>
      ing.name === ingredientName ? { ...ing, count: ing.count + 1 } : ing
    );
    setBurgerIngredients(updatedIngredients);
  };

  const handleDeleteIngredient = (ingredientName: string): void => {
    const updatedIngredients = burgerIngredients.map((ing) =>
      ing.name === ingredientName && ing.count > 0 ? { ...ing, count: ing.count - 1 } : ing
    );
    setBurgerIngredients(updatedIngredients);
  };

  return (
    <div>
      <BurgerComponent ingredients={burgerIngredients} />
      {burgerIngredients.map((ing) => (
        <div key={ing.name} className="divList">
          <img src={ing.img} alt={ing.name} style={{ width: '100px', height: '100px' }} />
          <span>{ing.name}</span>
          <AddButton onAddClick={() => handleAddIngredient(ing.name)} />
          <span>{ing.count}x</span>
          <DeleteButton onDeleteClick={() => handleDeleteIngredient(ing.name)} />
        </div>
      ))}
      <TotalPrice ingredients={burgerIngredients} basePrice={30} />
    </div>
  );
};

export default Burger;