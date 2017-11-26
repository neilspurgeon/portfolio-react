import React from 'react';
import heroImage from './images/desk-home.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
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