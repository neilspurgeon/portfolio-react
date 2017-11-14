import React from 'react';
import Nav from 'components/Nav/Nav.js';
import ProjectHeader from 'components/ProjectHeader/ProjectHeader.js';
import ProjectHero from 'components/ProjectHero/ProjectHero.js';
import NextProject from 'components/NextProject/NextProject.js';
import Footer from 'components/Footer/Footer.js';
import Waypoint from 'react-waypoint';

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

        <Nav showScrolledAside={this.state.showProjectAside} asideText={this.props.title} />

          <ProjectHeader
            title={this.props.title}
            subTitle={this.props.subTitle}
          />

          <ProjectHero
            image={this.props.hero}
            altText={this.props.altText}
          />

          <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
            <div>
            {this.props.children}
            </div>
          </Waypoint>

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