import React from 'react';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';
import Container from 'components/Container/Container.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';

// images
import clients from './images/clients.jpg';
import orderFlow from './images/order-flow.jpg';
import orderUserJourney from './images/order-user-journey.jpg';
import uiScreens from './images/ui-screens.jpg';


const NomNom = () => {

  return (
    <div>

      <ProjectOverview
        intro="Nom Nom is an order ahead and loyalty platform that Hathway created to license to clients. It is meant to be used as a starting point to jump start both design and development, while also allowing complete customizations specific to each client."
        roles={["UX/UI Design", "Product Design"]}
        credits={["Agency: Hathway", "Year: 2017-2018"]}
      />

      <Container>
        <ProjectSection>
          <Image image={clients} />
        </ProjectSection>
      </Container>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>

        <p>In 2017 Hathway was planning to build a handful of functionally similar apps in the fast casual and quick service restaurant space. Having recently launched apps for both Jamba Juice and The Coffee Bean & Tea Leaf, we knew there were a lot of inneficnies and repetive problem solving that could be reduced, all while creating a better value for the client and increasing the agency’s margins.</p>

        <p>Our goal was to create a base app with proven ux that could be easily themed and demoed to clients. From there we could take the themed base app and decide on the level of customization from there.</p>

        <h3 className={shared.sectionHeader}>Core Features</h3>
        <p>After client working sessions and competitive analysis, we decided on four primary sections of the app and identififed common features that we deemed should be standard.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={orderFlow} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Wireframes</h3>

        <p>lorem ipsum</p>
      </ProjectText>

      <ProjectSection>
        <Image image={orderUserJourney} />
      </ProjectSection>


      <ProjectText>
        <h3 className={shared.sectionHeader}>UI Design</h3>

        <p>lorem ipsum</p>
      </ProjectText>

      <ProjectSection>
        <Image image={uiScreens} />
      </ProjectSection>

    </div>
  );
};

export default NomNom;