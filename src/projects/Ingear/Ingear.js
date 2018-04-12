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
        intro="Ingear is an auto safety device startup formed in Beijing, China after the devastating result of a massive 2012 flood in that country They provide quality products that look at home in luxury car interiors."
        roles={["UX/UI Design", "Website Design", "Art Direction"]}
        credits={["Designed with Kyle Chuises"]}
      />

      <ProjectSection>
        <Image image={home} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>

        <p>Ingear had proved successful selling their products primarily on Amazon, but wanted to have their own website to better tell their story and sell products directly to the consumer.</p>

        <p>In a crowded market of cheaply made auto safety tools, Ingear offers a much higher end, quality-made product. They wanted to unashamedly promote the fact they were a China-based company and help shift the stigma that Chinese-made couldn't equal quality.</p>
      </ProjectText>

      <Container type="inset">
        <ProjectSection>
          <Image image={autoxscape} />
        </ProjectSection>
      </Container>

      <ProjectText>
        <h3 className={[shared.sectionHeader, shared.textBreak].join(' ')}>Approach</h3>
        <p>We approached the problem by first creating a hierarchy of focus for the website. The top priority was selling a quality-made product that was deserving of its price, with the company origin story secondary.</p>

        <p>We created detailed product pages that emphasized the quality specifications of each product. We tried to focus the images on high-end cars to further convey the standard of quality, while also showcasing how seamlessly the product could blend into the interior of such cars.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={product} />
        <Image image={mobile} />
        <Image image={productScrolled} />
        <Image image={company} />
      </ProjectSection>

    </div>
  );
};

export default Ingear;