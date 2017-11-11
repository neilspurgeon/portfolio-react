import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import image1 from './images/fresh-step-product-detail.jpg';
import image2 from './images/fresh-step-home.jpg';
import image3 from './images/fresh-step-mmm.jpg';
import image4 from './images/fresh-step-reward-detail.jpg';
import sharedStyles from 'sharedStyles/index.css';

const FreshStep = () => {
  return (
    <div>

      <ProjectText>
        <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Credits</span><br />
        Designed at Hathway<br />
        Creative Director: Garrett Deiter</p>
      </ProjectText>

      <ProjectImage
        image={image1}
        altText="Fresh Step product detail."
      />

      <ProjectImage
        image={image2}
        altText="Fresh Step home page."
      />

      <ProjectImage
        image={image3}
        altText="Fresh Step Million Meow Mission."
      />
      <ProjectImage
        image={image4}
        altText="Fresh Step reward detail."
      />

    </div>
  );
};

export default FreshStep;