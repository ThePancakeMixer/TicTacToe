import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let tictactoe = {
  board : [0,0,0,0,0,0,0,0,0],
  id : 0,
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = tictactoe;
    this.onDismiss =  this.onDismiss.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="grid">
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </div>
      </div>
    );
  }

  onDismiss(id){

    }

}



export default App;
