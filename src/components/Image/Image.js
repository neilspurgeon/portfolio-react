import React from 'react';
import styles from './style.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      classes: [
        styles.image
      ]
    };
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
        <div className={styles.wrapper}>
          <img
            className={this.state.classes.join(' ')}
            onLoad={this.handleLoad.bind(null, this)}
            src={this.props.image}
            alt={this.props.altText}
            ref={(img) => { this.img = img; }}
          />
        </div>
    );
  }
};

export default Image;