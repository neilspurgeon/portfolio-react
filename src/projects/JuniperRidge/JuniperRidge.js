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
        <p>Wild harvested on the trail, Juniper Ridge creates perfumes and fragrances by distilling and extracting natural scents from wildflowers, plants, and tree trimmings. With such unique process, Juniper Ridge felt their current brand didn’t represent them well enough. While our team worked on the full rebrand, I was heavily involved with the redesign of their fragrance packaging.</p>
      </ProjectText>

      <ProjectImage
        layout="bleedBottom"
        images={[
          {
            image: image1,
            altText: "Juniper Ridge packaging design"
          }
        ]}
      />

      <ProjectImage
        layout="fullBleed"
        images={[
          {
            image: image2,
            altText: "Juniper Ridge packaging design"
          }
        ]}
      />

      <ProjectImage
        layout="fullBleed"
        images={[
          {
            image: image3,
            altText: "Juniper Ridge packaging design"
          }
        ]}
      />

      <ProjectImage
        layout="fullBleed"
        images={[
          {
            image: image4,
            altText: "Juniper Ridge packaging design"
          }
        ]}
      />

    </div>
  );
};

export default JuniperRidge;