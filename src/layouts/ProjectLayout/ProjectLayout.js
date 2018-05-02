import React from 'react';
import Header from 'components/Header/Header.js';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import NextProject from 'components/NextProject/NextProject.js';
import Footer from 'components/Footer/Footer.js';
import { Helmet } from 'react-helmet';

class ProjectLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProjectAside: false
    };
  }

  handleEnter = () => {
    this.setState({
      showProjectAside: true
    });
  }

  handleLeave = () => {
    this.setState({
      showProjectAside: false
    });
  }

  render() {
    return (
      <div>

        <Helmet>
          <title>{this.props.title} – Neil Spurgeon. Product Designer</title>
        </Helmet>

        <Header />

        <ProjectHeader
          title={this.props.title}
          subTitle={this.props.subTitle}
        />

        <ProjectHero
          image={this.props.hero}
          altText={this.props.altText}
        />

        {this.props.children}

        <NextProject
          image={this.props.nextProjectImage}
          title={this.props.nextProjectTitle}
          path={this.props.nextProjectPath}
        />

        <Footer />

      </div>
    );
  }
};

export default ProjectLayout;