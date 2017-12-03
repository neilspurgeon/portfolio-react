import React from 'react';
import heroImage from './images/desk-home.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import sharedStyles from 'sharedStyles/index.css';
import productDetail from './images/desk-product-detail.png';
import shop from './images/desk-shop-category.png';
import navImg from './images/desk-nav-coffee-1.png';
import mobHomeImg from './images/mob-home.jpg';
import mobNav1Img from './images/mob-menu-1.jpg';
import mobNav2Img from './images/mob-menu-2.jpg';
import franchiseBttmImg from './images/desk-franchising-bottom.jpg';
import franchiseTopImg from './images/desk-franchising-top.jpg';

const CoffeeBeanWeb = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #F6F4F8 0%, #F6F4F8 100%)'
  };

  return (
    <div>

      <ProjectText>
        <p>Serving over 1,000 locations worldwide, the Coffee Bean & Tea Leaf wanted their online presence to match their phyisical. To do this, they came to Hathway for a full redesign of their current ecommerce website. My role on the project was to lead both UX and UI design.</p>

        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Credits</span><br />
        Creative Director: Garrett Deiter</p>
      </ProjectText>

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="pad"
        images={[
          {
            image: heroImage,
            altText: "Coffee Bean and Tea Leaf Homepages."
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="twoUpBleedBottom"
        width="60%"
        images={[
          {
            image: shop,
            altText: "Coffee Bean and Tea Leaf product detail"
          },
          {
            image: productDetail,
            altText: "Coffee Bean and Tea Leaf product detail"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="pad"
        images={[
          {
            image: navImg,
            altText: "Coffee Bean and Tea Leaf navigation."
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="threeUpMobile"
        images={[
          {
            image: mobHomeImg,
            altText: "Coffee Bean and Tea Leaf mobile homepage."
          },
          {
            image: mobNav1Img,
            altText: "Coffee Bean and Tea Leaf mobile navigation."
          },
          {
            image: mobNav2Img,
            altText: "Coffee Bean and Tea Leaf mobile navigation."
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="twoUp"
        images={[
          {
            image: franchiseTopImg,
            altText: "Coffee Bean and Tea Leaf franchising page."
          },
          {
            image: franchiseBttmImg,
            altText: "Coffee Bean and Tea Leaf franchising page."
          }
        ]}
      />

    </div>
  );
};

export default CoffeeBeanWeb;