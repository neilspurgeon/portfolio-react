import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Waypoint from 'react-waypoint';
import transitions from 'sharedStyles/transitions.css';
import styles from './style.css';

class ProjectImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        styles.imageWrapper,
        transitions.clipReveal
      ]
    };
  }

  handleEnter = () => {
    this.setState({
      classes: [
        styles.imageWrapper,
        transitions.clipReveal,
        transitions.inView
      ]
    });
  };

  render() {
    return (
        <Grid>
          <Waypoint bottomOffset="200px" onEnter={this.handleEnter}>
            <div className={this.state.classes.join(' ')}>
              <img className={styles.image} src={this.props.image} alt={this.props.altText} />
            </div>
          </Waypoint>
        </Grid>

    );
  }

};

export default ProjectImage;