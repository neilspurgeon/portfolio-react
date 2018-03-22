import React from 'react';
import styles from './style.css';
import { TweenMax } from 'gsap';

class Cursor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    // native mouse position
    this.mouseX = 0;
    this.mouseY = 0;

    // custom tweened cursor position
    this.posX = 0;
    this.posY = 0;
  }

  componentDidMount() {
    let this_ = this;
    this_.cursor = this.refs.cursor;
    this_.follower = this.refs.follower;


    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        this_.posX += (this_.mouseX - this_.posX) / 9;
        this_.posY += (this_.mouseY - this_.posY) / 9;

        TweenMax.set(this_.cursor, {
          css: {
            left: this_.mouseX,
            top: this_.mouseY
          }
        });

        TweenMax.set(this_.follower, {
          css: {
            left: this_.posX - 22,
            top: this_.posY - 22
          }
        });
      }
    });

    document.onmousemove = (e) => {
      this.mouseX = e.pageX;
      this.mouseY = e.pageY;
    };

    // hide native cursor
    document.body.style.cursor = 'none';

    // add cursor class over links
    document.querySelectorAll('a').forEach( (el) => {

      // set hover states
      el.onmouseenter = () => {
        this.setState({ isHovered: true });
      };

      el.onmouseleave = () => {
        this.setState({ isHovered: false });
      };
    });
  }

  render() {
    return (
      <div>
        <div className={ this.state.isHovered ? [styles.cursor, styles.active].join(' ') : styles.cursor } ref="cursor"></div>
        <div className={ this.state.isHovered ? [styles.follower, styles.active].join(' ') : styles.follower} ref="follower"></div>
      </div>
    );
  }
};

export default Cursor;