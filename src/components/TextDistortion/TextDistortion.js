import React from 'react';
import { Sprite, Stage, Text, Container, Texture} from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import WebFont from 'webfontloader';
import map from './images/cloudsbig.jpg';

// Setup dimensions
const width = window.innerWidth * .7;
const height = window.innerHeight * .8;
const textStyle = new PIXI.TextStyle({
  fontFamily: 'gt sectra',
  fontSize: 44,
  wordWrap: true,
  align: 'center',
  wordWrapWidth: width
});


// Create Text
const text = new PIXI.Text('Neil is a California based designer who likes to code. He is currently looking for full-time career opportunities',
  textStyle);
text.anchor.x = 0.5;
text.anchor.y = 0.5;
text.x = width / 2;
text.y = height / 2;


class TextDistortion extends React.Component {

  constructor(props) {
    super(props);
    // Set variables
    this.sprite;
  };


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


    // Config Font Loader
    WebFont.load({
      classes: false,
      custom: {
        families: ['gt sectra']
      },

      // wait for font to load
      active: () => {

        // Draw text
        this.app.stage.addChild(text);

      }
    });

    // Load Textures
    PIXI.loader
      .add("https://i.imgur.com/6zS3jtA.png")
      .load( () => setup() );

    const setup = () => {

      // This code will run when the loader has finished loading the image
      this.sprite = new PIXI.Sprite(
        // PIXI.loader.resources[map.src].texture
        PIXI.loader.resources["https://i.imgur.com/6zS3jtA.png"].texture
      );
      this.sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.CLAMP_TO_EDGE;

      // Create displament filter from sprite
      let displacementFilter = new PIXI.filters.DisplacementFilter(this.sprite);

      this.app.stage.addChild(this.sprite);
      this.app.stage.filters = [displacementFilter];

      // Create animation
      this.app.ticker.add(delta => gameLoop(delta));
    };

    let gameLoop = (delta) => {
      this.sprite.x += .5;
      this.sprite.y += .5;
    };

  };

  componentWillUnmount() {
    this.app.destroy(true);
    this.sprite.destroy({ children: true, texture: true, baseTexture: true });
    PIXI.loader.reset();
  };


  render() {
    return (
      <div ref="canvas" className={this.props.className}></div>
    );
  }
};

export default TextDistortion;