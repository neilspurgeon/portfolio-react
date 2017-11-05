import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import image1 from './images/jr-box-set-1.jpg';
import image2 from './images/jr-soaps.jpg';
import image3 from './images/jr-trail-resin-cologne-big-sur-1.jpg';
import image4 from './images/jr-christmas-fur-set-1.jpg';


const JuniperRidge = () => {
  return (
    <div>

      <ProjectText>
        <p>After succesfully launching their mobile app, Hathway was overhaul The Coffee Bean & Tea Leaf’s ecommerce website experirence. This included a complete redesign of their existing shopping pages, aswell as additional storytelling, marketing, and company information pages.</p>
        <p>My role on the project was lead ux and ui design. Our process began with creating a comprehensive site map and then creating low fideltity wireframes of each page type. By doing this we were able to lock down content and overall structure before diving into full fidelty ui.</p>
      </ProjectText>

      <ProjectImage
        image={image1}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

      <ProjectImage
        image={image2}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

      <ProjectImage
        image={image2}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

      <ProjectImage
        image={image3}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

      <ProjectImage
        image={image4}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

    </div>
  );
};

export default JuniperRidge;