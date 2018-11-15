import React, { Component } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";

export default class TestGame extends Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "MyGame/BuildSprint3V2.json",
      "MyGame/UnityLoader.js",
    );
  }

  render() {
    return <Unity unityContent={this.unityContent} />;
  }
}
