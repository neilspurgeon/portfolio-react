import nomNomData from './NomNom/data.js';
import NomNom from './NomNom/NomNom.js';
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
    data: nomNomData,
    component: NomNom
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
    data: IngearData,
    component: Ingear
  },
  {
    data: FreshStepData,
    component: FreshStep
  },
  {
    data: fontifiData,
    component: Fontifi
  }
];

export default projects;