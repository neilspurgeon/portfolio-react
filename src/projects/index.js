import coffeeBeanWebData from './CoffeeBeanWeb/data.js';
import CoffeeBeanWeb from './CoffeeBeanWeb/CoffeeBeanWeb.js';
import JuniperRidgeData from './JuniperRidge/data.js';
import JuniperRidge from './JuniperRidge/JuniperRidge.js';
import IngearData from './Ingear/data.js';
import Ingear from './Ingear/Ingear.js';
import FreshStepData from './FreshStep/data.js';
import FreshStep from './FreshStep/FreshStep.js';

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
  },
  {
    data: FreshStepData,
    component: FreshStep
  }
];

export default projects;