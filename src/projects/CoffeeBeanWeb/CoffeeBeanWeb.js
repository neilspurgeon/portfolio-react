import React from 'react';
import heroImage from './images/coffeebean-web-hero.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';


const CoffeeBeanWeb = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #F6F4F8 0%, #F6F4F8 100%)'
  };

  return (
    <div>

      <ProjectText>
        <p>After succesfully launching their mobile app, Hathway was overhaul The Coffee Bean & Tea Leaf’s ecommerce website experirence. This included a complete redesign of their existing shopping pages, aswell as additional storytelling, marketing, and company information pages.</p>
        <p>My role on the project was lead ux and ui design. Our process began with creating a comprehensive site map and then creating low fideltity wireframes of each page type. By doing this we were able to lock down content and overall structure before diving into full fidelty ui.</p>
      </ProjectText>

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="bleedBottom"
        images={[
          {
            image: heroImage,
            altText: "Coffee Bean and Tea Leaf Homepages."
          }
        ]}
      />

      <ProjectText>
        <p>Designed a set of  icons to be userd on shop page as navigation. Worked on a complete rebrand of Juniper Ridge, a wild-harvested fragrance company, to visually unify their brand. Redesigned.</p>
      </ProjectText>

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="bleedBottom"
        images={[
          {
            image: heroImage,
            altText: "Coffee Bean and Tea Leaf Homepages."
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="bleedBottom"
        images={[
          {
            image: heroImage,
            altText: "Coffee Bean and Tea Leaf Homepages."
          }
        ]}
      />

    </div>
  );
};

export default CoffeeBeanWeb;