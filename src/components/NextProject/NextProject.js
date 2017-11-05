import React from 'react';
import ReactDOM from 'react-dom';
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

  handleDividerEnter = (e) => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    const el = ReactDOM.findDOMNode(this.divider);
    const scrollPos = el.getBoundingClientRect().top - 100;
    const scrollPercentage = 1 -(scrollPos / window.innerHeight);
    el.style.transform = 'rotate(' + scrollPercentage * 45 + 'deg)';
  }

  handleDividerLeave = (e) => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Grid>
        <div className={styles.wrapper}>

          <Waypoint topOffset="20%" onEnter={this.handleDividerEnter} onLeave={this.handleDividerLeave}>
            <span  className={styles.divider} ref={(divider) => { this.divider = divider; }} />
          </Waypoint>

          <Waypoint onEnter={this.handleEnter} bottomOffset="300px">
            <img
              className={this.state.imageClasses.join(' ')}
              src={this.props.image}
              alt={this.props.altText}
            />
          </Waypoint>

          <div className={styles.nextTextWrapper}>
            <h2 className={styles.nextText}><span className={styles.label}>Next Project</span> <br />
            <a className={styles.nextLink} href={this.props.path}>{this.props.title}</a></h2>
          </div>

        </div>

      </Grid>
    );
  }
};

export default NextProject;