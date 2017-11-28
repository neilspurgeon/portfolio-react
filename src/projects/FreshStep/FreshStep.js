import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import image1 from './images/fresh-step-product-detail.jpg';
import homeTop from './images/fresh-step-home-top.jpg';
import homeBottom from './images/fresh-step-home-bottom.jpg';
import image3 from './images/fresh-step-mmm-landing.jpg';
import image4 from './images/fresh-step-rewards-detail.jpg';
import sharedStyles from 'sharedStyles/index.css';

const FreshStep = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #E0EDF5 0%, #E0EBF4 100%)'
  };

  return (
    <div>

      <ProjectText>
        <p>Fresh Step is an industry leading cat litter company that focuses on giving back to the cats. To do this, they have a Paw Points program that allows owners to support their local animal shelters by collecting box codes. Our goal was to help Fresh Step bring their Paw Points program online. In doing so, we redesigned their website with a mobile first approach to easily let cat owners help shelters.</p>
        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Credits</span><br />
          Designed with Thomas Charlet<br />
          UX Wireframes by Fluid<br />
          Designed at Hathway
        </p>
      </ProjectText>

      <ProjectImage
        layout="bleedBottom"
        backgroundStyle={bgStyle}
        images={[
          {
            image: image1,
            altText: "Fresh Step product detail."
          }
        ]}
      />

      <ProjectImage
        layout="twoUpLeftBleed"
        backgroundStyle={bgStyle}
        images={[
          {
            image: homeBottom,
            altText: "Fresh Step home page."
          }, {
            image: homeTop,
            altText: "Fresh Step home page."
          }
        ]}
      />

      <ProjectImage
        layout="bleedBottom"
        backgroundStyle={bgStyle}
        images={[
          {
            image: image3,
            altText: "Fresh Step Million Meow Mission."
          }
        ]}
      />

      <ProjectImage
        layout="bleedBottom"
        backgroundStyle={bgStyle}
        images={[
          {
            image: image4,
            altText: "Fresh Step reward detail."
          }
        ]}
      />

    </div>
  );
};

export default FreshStep;