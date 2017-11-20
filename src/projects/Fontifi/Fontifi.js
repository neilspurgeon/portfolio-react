import React from 'react';
import homeImg from './images/home.jpg';
import collectionImg from './images/collection.jpg';
import collectionEmptyImg from './images/collection-empty.jpg';
import signUpImg from './images/sign-up.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import sharedStyles from 'sharedStyles/index.css';

const Fontifi = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #F1F5ED 0%, #EFF2EB 100%)',
  };

  return (
    <div>

      <ProjectText>
        <p>This is an ongoing side project of mine that started as way learn React and to stay up to date on coding skills that weren’t being used at my full-time position. My goal was to create an interactive site that could be used by designers and developers to help find and explore different web font combinations.</p>

        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Technology</span><br />
        React<br />
        Express<br />
        MongoDB + mLab</p>
      </ProjectText>

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="pad"
        images={[
          {
            image: homeImg,
            altText: "Fontifi app"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="twoUpStacked"
        images={[
          {
            image: collectionEmptyImg,
            altText: "Fontifi my collection empty state"
          }, {
            image: collectionImg,
            altText: "Fontifi my collection"
          }
        ]}
      />

      <ProjectImage
        backgroundStyle={bgStyle}
        layout="pad"
        images={[
          {
            image: signUpImg,
            altText: "Fontifi login"
          }
        ]}
      />

    </div>
  );
};

export default Fontifi;