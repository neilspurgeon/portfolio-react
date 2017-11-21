import React from 'react';
import homeImg from './images/home.jpg';
import collectionImg from './images/collection.jpg';
import collectionEmptyImg from './images/collection-empty.jpg';
import signUpImg from './images/sign-up.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import sharedStyles from 'sharedStyles/index.css';

const Fontifi = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #F1F5ED 0%, #EFF2EB 100%)',
  };

  return (
    <div>

      <ProjectOverview
        linkUrl="https://www.fontifi.co"
        linkText="fontifi.co"
        >
        <p>This is an ongoing side project of mine that started as way learn React and to stay up to date on coding skills that weren’t being used at my full-time position. My goal was to create an interactive site that could be used by designers and developers to help find and explore different web font combinations.</p>

        <p className={sharedStyles.pSmall}><span className={sharedStyles.label}>Technology</span><br />
        React<br />
        Express<br />
        MongoDB + mLab</p>
      </ProjectOverview>

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

    <ProjectText>
      <p>I’m currently in the first stage of this project where I’ve been designing and developing a sort-of web font playground that will be used as the foundation going forward. To get things started I created a database that stores about 40 curated Google fonts and will then be added to as the project evolves. Right now, the user can then generate random font combinations from the database and then save them to their own collection for later reference. </p>
    </ProjectText>

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

    <ProjectText>
      <p>The next stage will be to create a database of curated combinations instead of randomly selected ones. I want users to be able to submit what they come up with, have it go through an approval process, and then get added to the database. It could then naturally grow from there.</p>
    </ProjectText>

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