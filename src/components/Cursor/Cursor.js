import React from 'react';
import styles from './style.css';
import { TweenMax } from 'gsap';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

class Cursor extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      isHovered: false,
      projectCardIsHovered: false

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
    this_.follower = this.refs.follower;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        this_.posX += (this_.mouseX - this_.posX) / 9;
        this_.posY += (this_.mouseY - this_.posY) / 9;

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

    this.attachEvents();
  };

  componentDidUpdate() {
    this.attachEvents();
  };


  attachEvents = () => {

    // add cursor class over links
    document.querySelectorAll('a, button, input, textarea').forEach( (el) => {

      // set hover states
      el.onmouseenter = () => {
        this.setState({ isHovered: true });
      };

      el.onmouseleave = () => {
        this.setState({ isHovered: false });
      };

      el.onclick = (e) => {
        this.setState({
          isHovered: false,
          projectCardIsHovered: false
        });
      };

    });

    // set hover states for project cards
    document.querySelectorAll('[data-projectcard]').forEach( (el) => {

      el.onmouseenter = () => {
        this.setState({ projectCardIsHovered: true });
      };

      el.onmouseleave = () => {
        this.setState({ projectCardIsHovered: false });
      };
    });

  }


  render() {

    let classNames = cx({
      follower: true,
      active: this.state.isHovered,
      projectCardHover: this.state.projectCardIsHovered,
      // projectCardHover: true
    });

    return (
      <div>
        <div className={classNames} ref="follower"></div>
        { this.props.children }
      </div>

    );
  }
};


export default Cursor;