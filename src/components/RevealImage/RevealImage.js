import React from 'react';
import styles from './style.css';
import Waypoint from 'react-waypoint';

class RevealImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        props.revealClass || styles.clipReveal,
        props.className
      ]
    };
  }

  handleEnter = () => {
    this.setState({
      classes: [
        this.props.revealClass || styles.clipReveal,
        this.props.inViewClass || styles.inView,
        this.props.className
      ]
    });
  };

  render() {
    return (
      <Waypoint bottomOffset="200px" onEnter={this.handleEnter}>
        <span className={this.state.classes.join(' ')}>
          {this.props.children}
        </span>
      </Waypoint>
    );
  }
};

export default RevealImage;