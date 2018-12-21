import React, { Component } from 'react'

export default class Game extends Component {
  render() {
    return (
      <div style={{ "height": "120vh" }} className="row flex-fill">
        <div className="col-12">
          <iframe title="MyGame" width="100%" height="100%" src="/MyGame" frameBorder="0"></iframe>
        </div>
      </div>

    )
  }
}
