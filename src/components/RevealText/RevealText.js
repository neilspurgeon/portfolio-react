import React from 'react';
import styles from './style.css';
import Waypoint from 'react-waypoint';

class RevealImage extends React.Component {
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
  };

  render() {

    const CustomTag = `${this.props.tag}`;

    return (
      <Waypoint bottomOffset={this.props.bottomOffset || '200px'} onEnter={this.handleEnter}>

          <CustomTag className={this.props.className}>

          {this.props.text.map((text, i) => {
            let elStyle = {transitionDelay: (.15 * i) + 's'};
            let classes = this.state.revealClasses;
            return (
              <div className={styles.textRevealWrapper} key={'line ' + i}>
                <span className={classes.join(' ')} style={elStyle}>
                  {text}
                </span>
              </div>
            );
          })}
          </CustomTag>

      </Waypoint>
    );
  }
}

export default RevealImage;