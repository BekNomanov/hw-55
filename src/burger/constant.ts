import type {Ingredients} from '../type';
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import beconImage from '../assets/becon.png';

export const INGREDIENTS: Ingredients[] = [
  {name: 'Meat', price: 50, count: 0, img: meatImage},
  {name: 'Cheese', price: 50, count: 0, img: cheeseImage},
  {name: 'Salad', price: 10, count: 0, img: saladImage},
  {name: 'Bacon', price: 60, count: 0, img: beconImage},
];