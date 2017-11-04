import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import Waypoint from 'react-waypoint';
import ClassNames from 'classnames';

class ProjectImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false
    };
  }

  handleEnter = (e) => {
    this.setState({
      inView: true
    });
  };

  render() {
    return (
        <Grid>
          <Waypoint bottomOffset="200px" onEnter={this.handleEnter}>
            <div className={ClassNames(styles.imageWrapper, {[styles.inView] : this.state.inView === true})}>
              <img className={styles.image} src={this.props.image} alt={this.props.altText} />
            </div>
          </Waypoint>
        </Grid>

    );
  }

};

export default ProjectImage;