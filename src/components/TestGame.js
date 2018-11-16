// import React, { Component } from 'react';
// import Unity, { UnityContent } from "react-unity-webgl";

// export default class TestGame extends Component {
//   constructor(props) {
//     super(props);

//     this.unityContent = new UnityContent(
//       "MyGame/BuildSprint3V2.json",
//       "MyGame/UnityLoader.js",
//     );
//   }

//   render() {
//     return <Unity unityContent={this.unityContent} />;
//   }
// }

import React, { Component } from 'react'

export default class TestGame extends Component {
  render() {
    return (
      <div style={{ "height": "100vh" }} className="row flex-fill">
        <div className="col-12">
          <iframe width="100%" height="100%" src="/MyGame" frameborder="0"></iframe>
        </div>
      </div>
    )
  }
}

