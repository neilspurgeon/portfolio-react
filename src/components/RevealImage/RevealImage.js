import React from 'react';
import styles from './style.css';
import Waypoint from 'react-waypoint';

class RevealImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        styles.clipReveal,
        props.className
      ]
    };
  }

  handleEnter = () => {
    this.setState({
      classes: [
        styles.clipReveal,
        styles.inView,
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