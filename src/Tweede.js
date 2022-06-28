import React, {Component, useState} from 'react';

class Tweede extends Component {
    constructor(props){
        super(props)
        this.state = {
            getal : 0
        }
    }

  render() {
    return (
        <div className="App">
            Dit is de tweede  {this.props.een}
        </div>
    )
  }
}

export default Tweede;