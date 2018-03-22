import React from 'react';
import { Sprite, Stage, Text, Container, Texture} from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
import WebFont from 'webfontloader';

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


    // Set variables
    let sprite;

    // Load Textures
    PIXI.loader
      .add('https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png')
      .load( () => setup() );

    const setup = () => {

      // This code will run when the loader has finished loading the image
      sprite = new PIXI.Sprite(
        PIXI.loader.resources['https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png'].texture
      );
      sprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

      // Create displament filter from sprite
      let displacementFilter = new PIXI.filters.DisplacementFilter(sprite);

      this.app.stage.addChild(sprite);
      this.app.stage.filters = [displacementFilter];

      // Create animation
      this.app.ticker.add(delta => gameLoop(delta));
    };

    function gameLoop(delta) {
      sprite.x += .2;
      sprite.y += .2;
    }
  }


  render() {
    return (
      <div ref="canvas" className={this.props.className}></div>
    );
  }
};

export default TextDistortion;