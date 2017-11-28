import React from 'react';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import home from './images/homepage.jpg';
import productPage1 from './images/product-page-autoxscape.jpg';
import productPage2 from './images/product-page-autoalert.jpg';
import mobile1 from './images/ingear-mob-1.jpg';
import mobile2 from './images/ingear-mob-2.jpg';
import mobile3 from './images/ingear-mob-3.jpg';
import scrolledNav from './images/product-page-scrolled-navbar.jpg';
import contact from './images/contact.jpg';
import support from './images/support-faqs.jpg';
import sharedStyles from 'sharedStyles/index.css';

const bgStyle = {
  backgroundImage: 'linear-gradient(-135deg, #E9ECF1 0%, #E7E9EC 100%)'
};

const Ingear = () => {

  return (
    <div>

      <ProjectText>
        <p>Ingear specializes in high end auto safety devices. While there are many other companies that produce similar tools, none match the level of precision, quality, and design that Ingear provides. After testing their product on Amazon, Ingear was ready to invest in a full ecommerce website that matched the quality of their products.</p>

        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Credits</span><br />
        Designed with Kyle Chuises</p>
      </ProjectText>

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="pad"
        images={[
          {
            image: home,
            altText: "Ingear homepage design"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="twoUpLeftBleed"
        images={[
          {
            image: productPage1,
            altText: "Ingear product detail design"
          }, {
            image: productPage2,
            altText: "Ingear product detail design"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="threeUpMobile"
        images={[
          {
            image: mobile1,
            altText: "Ingear mobile web design"
          }, {
            image: mobile2,
            altText: "Ingear mobile web design"
          }, {
            image: mobile3,
            altText: "Ingear mobile web design"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="bleedBottom"
        images={[
          {
            image: scrolledNav,
            altText: "Ingear website navigation design"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="twoUpBleedBottom"
        images={[
          {
            image: contact,
            altText: "Ingear contact design"
          }, {
            image: support,
            altText: "Ingear support design"
          }
        ]}
      />

    </div>
  );
};

export default Ingear;