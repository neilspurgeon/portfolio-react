import React from 'react';
import homeImg from './images/home.jpg';
import shared from 'sharedStyles/index.css';
import collectionImg from './images/collection.jpg';
import collectionEmptyImg from './images/collection-empty.jpg';
import signUpImg from './images/sign-up.jpg';
import ProjectText from 'components/ProjectText/ProjectText.js';
import ProjectOverview from 'components/ProjectOverview/ProjectOverview.js';
import ProjectImage from 'components/ProjectImage/ProjectImage.js';
import Container from 'components/Container/Container.js';

const Fontifi = () => {
  const bgStyle = {
    backgroundImage: 'linear-gradient(-135deg, #E8F2FC 0%, #E4EEF7 100%)',
  };

  return (
    <div>

      <ProjectOverview
        linkUrl="https://fontifi.co/"
        linkText="fontifi.co"
        intro="Fontifi is an ongoing personal project of mine to help designers and developers discover and pair web font combinations. It was started mainly as a way to learn React and further explore front-end development."
        roles={["UI/UX Design", "Web Development"]}
        tech={["React", "Express", "MongDB + mLab"]}
        />

      <Container type="inset">
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
      </Container>

    <ProjectText>
      <h3 className={shared.sectionHeader}>Problem</h3>
      <p>While the primary motivation of Fontifi was to focus on learning new web development skills, I also wanted to create an app that could be useful. With the vast amount of freely available web fonts, it's become overwhelming for beginner designers and developers to pick good combinations. The goal of Fontifi is to provide a curated selection of font pairs that can be then be modified and saved to the user's liking.</p>
    </ProjectText>

    <Container type="inset">
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
    </Container>

    <ProjectText>
      <h3 className={shared.sectionHeader}>Approach</h3>
      <p>In the first stage of this project, I've created a database that stores about 40 curated Google fonts. The user can then generate random font combinations from the database. However, this presents some problems and is not the ultimate goal of the project. The main problem is that these randomly generated pairs, more often than not, don't go together. The next step is to add a collection of curated font pairs that can be served instead.</p>

      <h3 className={shared.sectionHeader}>Technical</h3>
      <p>The app uses React to consume the Google Fonts API with a simple Express backend that serves curated font pairs. The backend also connects to mLab to store user data and save fonts.</p>
    </ProjectText>

    <Container type="inset">
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
    </Container>

    </div>
  );
};

export default Fontifi;