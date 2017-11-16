import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import transitions from 'sharedStyles/transitions.css';
import Waypoint from 'react-waypoint';
import Image from 'components/Image/Image.js';

class NextProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      revealImageClasses: [
        transitions.clipReveal
      ]
    };
  }

  handleEnter = () => {
    this.setState({
      revealImageClasses: [
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
      <div>
        <Waypoint topOffset="20%" onEnter={this.handleDividerEnter} onLeave={this.handleDividerLeave}>
          <span  className={styles.divider} ref={(divider) => { this.divider = divider; }} />
        </Waypoint>
        <Grid>
          <div className={styles.wrapper}>

            <Waypoint onEnter={this.handleEnter} bottomOffset="300px">

              <Link to={this.props.path} className={styles.nextLink}>
                <div className={styles.imageWrapper}>
                  <div className={this.state.revealImageClasses.join(' ')}>
                    <Image
                      className={styles.nextImage}
                      image={this.props.image}
                      altText={this.props.altText}
                    />
                  </div>
                </div>
                <div className={styles.nextTextWrapper}>
                  <h2 className={styles.nextText}><span className={styles.label}>Next Project</span> <br />
                  <span className={styles.nextTitle}>{this.props.title}</span></h2>
                </div>
              </Link>

            </Waypoint>
          </div>
        </Grid>
      </div>

    );
  }
};

export default NextProject;