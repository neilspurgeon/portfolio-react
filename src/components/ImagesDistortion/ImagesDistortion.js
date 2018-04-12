import React from 'react';
import styles from './style.css';
import * as PIXI from 'pixi.js';

const width = ((window.innerWidth * .7) - 70) /2;
const height = window.innerHeight * .8;

class ImagesDistortion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      classes: [
        styles.image,
      ]
    };
  }

  componentDidMount() {

    //Setup PIXI Canvas in componentDidMount
    this.app = new PIXI.Application(width, height, {
      transparent: true,
      // backgroundColor: '0xffffff',
      antialias: true,
      autoResize: true,
      resolution: window.devicePixelRatio,
    });
    this.refs.canvas.appendChild(this.app.view);

  }

  handleLoad = () => {
    this.setState({
      isLoaded: true,
      classes: [
        styles.image,
        styles.isLoaded
      ]
    });
  }

  render() {

    return (
        <div className={[styles.wrapper, this.props.className].join(' ')} style={this.props.style}>
          <div ref="canvas" className={this.props.className}></div>
          <img
            style={{opacity: 0}}
            className={this.state.classes.join(' ')}
            onLoad={this.handleLoad.bind(null, this)}
            srcSet={this.props.image.srcSet}
            src={this.props.image.src}
            sizes={this.props.sizes}
            alt={this.props.altText}
            ref={(img) => { this.img = img; }}
          />
        </div>
    );
  }
};

export default ImagesDistortion;