import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import image1 from './images/ingear-home-full.jpg';
import image2 from './images/ingear-product-detail.jpg';
import image3 from './images/ingear-mobile.jpg';
import image4 from './images/ingear-product-detail-nav.jpg';
import image5 from './images/ingear-support.jpg';

const Ingear = () => {
  return (
    <div>

      <ProjectText>
        <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
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

      <ProjectImage
        image={image5}
        altText="Coffe Bean and Tea Leaf Homepages."
      />

    </div>
  );
};

export default Ingear;