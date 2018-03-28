import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import Container from 'components/Container/Container.js';
import styles from './styles.css';
import shared from 'sharedStyles/index.css';
import Image from 'components/Image/Image.js';
import ProjectSection from 'components/ProjectSection/ProjectSection.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';


// import images
import homePhone from './images/home-phone.jpg';
import teaUI from './images/tea-ui.jpg';
import coffeeUI from './images/coffee-ui.jpg';
import shop from './images/shop.jpg';
import sitemap from './images/sitemap.jpg';
import ux from './images/ux.jpg';
import mobile from './images/mobile.jpg';
import cup from './images/cup.jpg';
import girl from './images/girl.jpg';
import company from './images/company.jpg';
import menu from './images/menu.jpg';
import checkout from './images/checkout.jpg';


const CoffeeBean = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #F6F4F8 0%, #F6F4F8 100%)'
  };

  return (
    <div>

      <ProjectOverview
        intro="Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf has become a highly popular chain with over 1,000 locations in California and Asia. Their next step was to expand their ecommerce website to reach even more costumers."
        role={["UX/UI Design", "Website Design"]}
        credits={["Creative Director: Garrett Deiter", "Digital Agency: Hathway", "Branding Agency: Pitch", "Year: 2016"]}
      />

      <Container>
        <ProjectSection>
          <Image className={styles.cluster1img1} image={homePhone} />
          <Image className={styles.cluster1img2} image={teaUI} />
          <Image className={styles.cluster1img3} image={coffeeUI} />
        </ProjectSection>
      </Container>


      <ProjectText>
        <h3 className={shared.sectionHeader}>Problem</h3>

        <p>While updating their brand and working through the release of a mobile ordering and rewards app,  The Coffee Bean & Tea Leaf also decided it was time update their website. While already having an ecommerce website, it posed many usability issues and also performed very low in SEO rankings mainly due to not being mobile responsive and an overall lack of content.</p>

        <p>Not only were we looking to fix existing problems, but our team at Hathway also identified many additional features to better meet the user needs, and ultimatley increase sales. This included seamlessly integrating user accounts across the mobile app and website, allowing them to manage their account from either platform.</p>
      </ProjectText>

      <ProjectSection>
        <Image image={shop} />
      </ProjectSection>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Process</h3>

        <p>With only very limited analytics history, we had to base most of our deciscions on ecommerce and SEO best practices, and then learn and improve from there. This was done both by user testing in the protoype and wireframing stages, as well looking at real data once the first iteration was launched.</p>

        <p>We started the design process by creating a high level site map and then moving in to various degrees of detailed wireframing. This allowed us to identify and test potential problems early on, as well as getting stakeholder approval without as many visual distractions.</p>
      </ProjectText>

      <Container>
        <ProjectSection>
          <Image image={sitemap} />
        </ProjectSection>
      </Container>

      <ProjectSection>
        <Image image={ux} />
        <Image image={mobile} />
      </ProjectSection>

      <Container>
        <ProjectSection>
          <Image className={styles.cluster2img1} image={cup} />
          <Image className={styles.cluster2img2} image={girl} />
        </ProjectSection>
      </Container>

      <ProjectText>
        <h3 className={shared.sectionHeader}>Outcome</h3>

        <p>The new website has proved successful with an average increased conversion rate of over 150% as well as an increased average revenu rate of 73% per transaction.</p>

      </ProjectText>


      <ProjectSection>
        <Image image={company} />
        <Image image={menu} />
        <Image image={checkout} />
      </ProjectSection>



    </div>
  );
};

export default CoffeeBean;