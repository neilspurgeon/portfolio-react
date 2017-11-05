import coffeeBeanWebData from './CoffeeBeanWeb/data.js';
import CoffeeBeanWeb from './CoffeeBeanWeb/CoffeeBeanWeb.js';
import JuniperRidgeData from './JuniperRidge/data.js';
import JuniperRidge from './JuniperRidge/JuniperRidge.js';

const projects = [
  {
    data: coffeeBeanWebData,
    component: CoffeeBeanWeb
  },
  {
    data: JuniperRidgeData,
    component: JuniperRidge
  }
];

export default projects;