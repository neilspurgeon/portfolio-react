import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import transitions from 'sharedStyles/transitions.css';
import Waypoint from 'react-waypoint';

class NextProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageClasses: [
        styles.nextImage,
        transitions.clipReveal
      ]
    };
  }

  handleEnter = () => {
    this.setState({
      imageClasses: [
        styles.nextImage,
        transitions.clipReveal,
        transitions.inView
      ]
    });
  }

  render() {
    let props = this.props;
    return (
      <Grid>
        <div className={styles.wrapper}>

          <span className={styles.divider} />

          <Waypoint onEnter={this.handleEnter} bottomOffset="300px">
            <img
              className={this.state.imageClasses.join(' ')}
              src={props.img || "http://neilspurgeon.com/assets/images/resized/2800/juniper-ridge-hero.jpg"}
              alt={props.altText}
            />
          </Waypoint>

          <div className={styles.nextTextWrapper}>
            <h2 className={styles.nextText}><span className={styles.label}>Next Project</span> <br />
            <a className={styles.nextLink} href="www.google.com">{props.nextLink || 'Project Name'}</a></h2>
          </div>

        </div>

      </Grid>
    );
  }
};

export default NextProject;