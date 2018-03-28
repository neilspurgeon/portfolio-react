import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import Waypoint from 'react-waypoint';
import Container from 'components/Container/Container.js';

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealClasses: [styles.textRevealText]
    };
  }

  handleEnter = () => {
    this.setState({
      revealClasses: [styles.textRevealText, styles.inView]
    });
  }

  render() {
    return (
        <Container className={styles.projectHeader}>

          <Waypoint onEnter={this.handleEnter}>
            <h1 className={[styles.title, styles.textRevealWrapper].join(' ')}>
              <span className={this.state.revealClasses.join(' ')}>
                {this.props.title}
              </span>
            </h1>
          </Waypoint>

        </Container>
    );
  }
}

export default ProjectHeader;