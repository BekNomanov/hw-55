export interface Ingredients {
  id: number
  name: string;
  price: number;
  img: string;
  count: number;
}

interface BurgerIngredient {
  name: string;
  price: number;
  count: number;
  img: string;
  id: number;
}

interface TotalPriceProps {
  ingredients: BurgerIngredient[];
  basePrice: number;
}
