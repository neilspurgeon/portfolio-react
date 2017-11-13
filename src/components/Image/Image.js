import React from 'react';
import styles from './style.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      classes: [
        styles.image,
        props.className
      ]
    };
  }

  handleLoad = () => {
    this.setState({
      isLoaded: true,
      classes: [
        styles.image,
        styles.isLoaded,
        this.props.className
      ]
    });
  }

  render() {

    return (
        <div className={[styles.wrapper, this.props.className].join(' ')}>
          <img
            className={this.state.classes.join(' ')}
            onLoad={this.handleLoad.bind(null, this)}
            srcSet={this.props.image.srcSet}
            src={this.props.image.src}
            alt={this.props.altText}
            ref={(img) => { this.img = img; }}
          />
        </div>
    );
  }
};

export default Image;