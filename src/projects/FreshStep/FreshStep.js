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
        <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Credits</span><br />
        Designed at Hathway<br />
        Creative Director: Garrett Deiter</p>
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