import React from 'react';
import { Sprite, Stage, Text, Container, Texture} from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';
const bunny = "https://i.imgur.com/IaUrttj.png";
const displace = "https://i.imgur.com/3DlQqNq.jpg";


// Setup dimensions
const width = window.innerWidth * .7;
const height = window.innerHeight * .3;
const textStyle = new PIXI.TextStyle({
  fontFamily: 'gt sectra',
  fontSize: 44,
  fill: '#000',
  wordWrap: true,
  align: 'center',
  wordWrapWidth: width
});

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
      antialias: true,
      autoResize: true,
      resolution: window.devicePixelRatio,
    });
    this.refs.canvas.appendChild(this.app.view);

    this.app.stage.addChild(text);
  }

  render() {
    return (
      <div ref="canvas"></div>
    );
  }
};

export default TextDistortion;