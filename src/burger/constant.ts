import type {Ingredients} from '../type';
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import beconImage from '../assets/becon.png';

export const INGREDIENTS: Ingredients[] = [
  {id: 1, name: 'Meat', price: 50, count: 0, img: meatImage},
  {id: 2, name: 'Cheese', price: 50, count: 0, img: cheeseImage},
  {id: 3, name: 'Salad', price: 10, count: 0, img: saladImage},
  {id: 4, name: 'Bacon', price: 60, count: 0, img: beconImage},
];