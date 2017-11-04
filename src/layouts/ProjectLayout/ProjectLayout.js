import React from 'react';
import Nav from 'components/Nav/Nav.js';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import NextProject from 'components/NextProject/NextProject.js';
import Footer from 'components/Footer/Footer.js';

const ProjectLayout = (props) => {
  return (
    <div>

      <Nav />

        <ProjectHeader
          title={props.title}
          subTitle={props.subTitle}
        />

        <ProjectHero
          image={props.hero}
          altText="Coffee Bean and Tea Leaf Homepages."
        />

        {props.children}

        <NextProject
          image={props.nextProjectImage}
          altText="alt text"
        />

      <Footer />

    </div>
  );
};

export default ProjectLayout;