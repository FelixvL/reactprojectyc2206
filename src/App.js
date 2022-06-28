//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8082/felixallemaaltijden`
})



class App extends Component {
  state = {
    maaltijden:[]
  }

  constructor(){
    super();
    api.get('/').then( res => {
      console.log(res.data);
      this.setState({ maaltijden : res.data})
    })
  }

  render() {
    return (<div className="App">
      {this.state.maaltijden.map( maaltijd => <h1 key={maaltijd.id}>{maaltijd.naam}</h1>)}      
    </div>
    )
  }
}

export default App;


// npx create-react-app abc-def
// npm start
