import coffeeBeanData from './CoffeeBean/data.js';
import CoffeeBean from './CoffeeBean/CoffeeBean.js';
import JuniperRidgeData from './JuniperRidge/data.js';
import JuniperRidge from './JuniperRidge/JuniperRidge.js';
import IngearData from './Ingear/data.js';
import Ingear from './Ingear/Ingear.js';
import FreshStepData from './FreshStep/data.js';
import FreshStep from './FreshStep/FreshStep.js';
import fontifiData from './Fontifi/data.js';
import Fontifi from './Fontifi/Fontifi.js';

const projects = [
  {
    data: fontifiData,
    component: Fontifi
  },
  {
    data: coffeeBeanData,
    component: CoffeeBean
  },
  {
    data: JuniperRidgeData,
    component: JuniperRidge
  },
  {
    data: FreshStepData,
    component: FreshStep
  },
  {
    data: IngearData,
    component: Ingear
  }
];

export default projects;