import React from 'react';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import heroImage from './images/coffeebean-web-hero.jpg';

const CoffeBeanEcomerce = () => {
  return (
    <div>
      <ProjectHeader
        title={'Coffee Bean Ecommerce'}
        byLine={'— Website Design, UX Design'}
      />
    <ProjectHero
      image={heroImage}
      altText="Coffe Bean and Tea Leaf Homepages."
    />
    </div>
  );
};

export default CoffeBeanEcomerce;