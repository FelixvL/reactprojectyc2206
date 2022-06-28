//import logo from './logo.svg';
import React, {Component, useState} from 'react';
import './App.css';
import axios from 'axios';
import VanMij from './VanMij';
import Tweede from './Tweede';

const api = axios.create({
  baseURL: `http://localhost:8082/`
})



class App extends Component {


  

  createMaaltijd = async() =>{
    let res = await api.post('felixmaakmaaltijdaan',{naam:"test",id:9})
    console.log(res.data.naam);
    this.setState({ naamMaaltijd : res.data.naam})
    
  }
  constructor(props){
    super(props);
    this.state = {
      maaltijden:[],
      naamMaaltijd : "a"
    }
  }
  componentDidMount() {
    api.get('/felixallemaaltijden').then( res => {
      console.log(res.data);
      this.setState({ maaltijden : res.data})
      
    })
  }

  render() {
    return (<div className="App">
      {this.state.naamMaaltijd}
      <button onClick={this.createMaaltijd}>create Maaltijd</button>
      {this.state.maaltijden.map( maaltijd => <h1 key={maaltijd.id}> {maaltijd.naam} <Tweede een={maaltijd.naam} /></h1>)}      
      <VanMij />
      <VanMij />
      <VanMij />
      <hr /><hr />
      <Tweede een="go" />
      <Tweede een="ging" />
      <Tweede een="doei" />
    </div>
    )
  }
}

export default App;


// npx create-react-app abc-def
// npm start
