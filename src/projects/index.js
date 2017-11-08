import coffeeBeanWebData from './CoffeeBeanWeb/data.js';
import CoffeeBeanWeb from './CoffeeBeanWeb/CoffeeBeanWeb.js';
import JuniperRidgeData from './JuniperRidge/data.js';
import JuniperRidge from './JuniperRidge/JuniperRidge.js';
import IngearData from './Ingear/data.js';
import Ingear from './Ingear/Ingear.js';

const projects = [
  {
    data: coffeeBeanWebData,
    component: CoffeeBeanWeb
  },
  {
    data: JuniperRidgeData,
    component: JuniperRidge
  },
  {
    data: IngearData,
    component: Ingear
  }
];

export default projects;