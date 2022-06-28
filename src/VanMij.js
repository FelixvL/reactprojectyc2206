import React, {Component, useState} from 'react';

class VanMij extends Component {


    constructor(){
        super()
        this.state = {
            getal : 0
        }
    }

    ietsFunctie = () =>{
        this.setState({ getal : ++this.state.getal })
    }

  render() {
    return (
        <div className="App">
            VanMij Component{this.state.getal} 
            <button onClick={this.ietsFunctie}>go</button>
        </div>
    )
  }
}

export default VanMij;