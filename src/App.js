//import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:8082/felixallemaaltijden`
})



class App extends Component {
  constructor(){
    super();
    api.get('/').then( res => {
      console.log(res.data);
    })
  }

  render() {
    return (<div className="App">
      hoi
    </div>
    )
  }
}

export default App;


// npx create-react-app abc-def
// npm start
