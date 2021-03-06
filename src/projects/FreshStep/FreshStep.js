import React from 'react';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';

// images
import home from './images/home.jpg';
import product from './images/product.jpg';
import shelters from './images/shelters.jpg';
import reward from './images/reward.jpg';

const FreshStep = () => {

  return (
    <div>
      <ProjectOverview
        intro="Fresh Step is an industry leading cat litter company that focuses on giving back profits to help cats. To do this, they have a Paw Points program that allows owners to support their local animal shelters by collecting box codes."
        roles={["UI Design", "Website Design", "Visual Design"]}
        credits={["Designed with Thomas Charlet", "UX Wireframes by Fluid"]}
      />

      <ProjectSection>
        <Image image={home} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>
        <p>To correspond with the release of their new Paw Points app and updated packaging, Fresh Step needed to update their marketing website. They wanted to achieve a more premium, but playful, brand feel while also emphasizing their altruistic desires of helping animal shelters provide for cats in need. Hathway was brought in to provide visual design and take the provided UX wireframes to the next level.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={product} />
      </ProjectSection>

      <ProjectText>
        <h3 className={[shared.sectionHeader, shared.textBreak].join(' ')}>Approach</h3>
        <p>Since this was a primarily marketing focused website, it was important to truly engage the cat-loving user. With the help of the Fresh Step brand team, we began with a massive photoshoot of cats and kittens that we could edit and utilize throughout the designs. Bold use of color and playful cat images interacting with modern UI elements gave us the premium, but fun, feel we were looking for.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={shelters} />
        <Image image={reward} />
      </ProjectSection>

    </div>
  );
};

export default FreshStep;