import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import Waypoint from 'react-waypoint';

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
      <Grid>
        <div className={styles.wrapper}>

          <Waypoint onEnter={this.handleEnter}>
            <h1 className={[styles.title, styles.textRevealWrapper].join(' ')}>
              <span className={this.state.revealClasses.join(' ')}>
                {this.props.title}
              </span>
            </h1>
          </Waypoint>

          <p className={[styles.subTitle, styles.textRevealWrapper].join(' ')}>
            <span className={this.state.revealClasses.join(' ')}>
              {this.props.subTitle}
            </span>
          </p>

        </div>
      </Grid>
    );
  }
}

export default ProjectHeader;