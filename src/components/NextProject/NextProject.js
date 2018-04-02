import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import transitions from 'sharedStyles/transitions.css';
import Waypoint from 'react-waypoint';
import Container from 'components/Container/Container.js';

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


  render() {
    return (
      <Container>
        <Waypoint onEnter={this.handleEnter} bottomOffset="300px">

        <div className={styles.linkWrapper}>
          <Link to={this.props.path} className={styles.nextLink}>
            <h2 className={styles.nextText}><span className={styles.label}>Next Project</span><br />
            <span className={styles.nextTitle}>{this.props.title}</span></h2>
          </Link>
        </div>

        </Waypoint>
      </Container>
    );
  }
};

export default NextProject;