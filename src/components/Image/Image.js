import React from 'react';
import styles from './style.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      classes: [
        styles.image,
      ]
    };
  }

  handleLoad = () => {
    console.log('loaded');
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
          <img
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

export default Image;