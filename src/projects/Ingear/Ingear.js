import React from 'react';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';
import Container from 'components/Container/Container.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';

// images
import home from './images/home.jpg';
import autoxscape from './images/autoxscape.jpg';
import product from './images/product.jpg';
import productScrolled from './images/product-scrolled.jpg';
import mobile from './images/mobile.jpg';
import company from './images/company.jpg';


const Ingear = () => {

  return (
    <div>

      <ProjectOverview
        intro="Ingear specializes in high end auto safety devices. While there are many other companies that produce similar tools, none match the level of precision, quality, and design that Ingear provides. After testing their product on Amazon, Ingear was ready to invest in a full ecommerce website that matched the quality of their products."
        roles={["UX/UI Design", "Website Design"]}
        credits={["Designed with Kyle Chuises"]}
      />

      <ProjectSection>
        <Image image={home} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>

        <p>While updating their brand and working through the release of a mobile ordering and rewards app,  The Coffee Bean & Tea Leaf also decided it was time update their website. While already having an ecommerce website, it posed many usability issues and also performed very low in SEO rankings mainly due to not being mobile responsive and an overall lack of content.</p>

        <h3 className={[shared.sectionHeader, shared.textBreak].join(' ')}>Approach</h3>
        <p>Not only were we looking to fix existing problems, but our team at Hathway also identified many additional features to better meet the user needs, and ultimatley increase sales. This included seamlessly integrating user accounts across the mobile app and website, allowing them to manage their account from either platform.</p>
      </ProjectText>

      <Container type="inset">
        <ProjectSection>
          <Image image={autoxscape} />
        </ProjectSection>
      </Container>

      <ProjectSection>
        <Image image={product} />
        <Image image={mobile} />
        <Image image={productScrolled} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Development</h3>

        <p>While updating their brand and working through the release of a mobile ordering and rewards app,  The Coffee Bean & Tea Leaf also decided it was time update their website. While already having an ecommerce website, it posed many usability issues and also performed very low in SEO rankings mainly due to not being mobile responsive and an overall lack of content.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={company} />
      </ProjectSection>

    </div>
  );
};

export default Ingear;