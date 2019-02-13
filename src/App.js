import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const tictactoe = [
  {
    index:0,
    isSet:""      
  },
  {
    index:1,
    isSet:""      
  },  {
    index:2,
    isSet:""      
  },  {
    index:3,
    isSet:""      
  },  {
    index:4,
    isSet:""      
  },  {
    index:5,
    isSet:""      
  },  {
    index:6,
    isSet:""      
  },  {
    index:7,
    isSet:""      
  },  {
    index:8,
    isSet:""      
  }
]



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:tictactoe,
    }
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(e){
    console.log(e);
    const isNotId = item => item.index !== e;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({list:updatedList});
  }

  render() {
    return (
      <div className="App">
        <div className="grid">
          {this.state.list.map(function(item){
            return (
              <button className="cell" onClick={()=>this.onDismiss(item.index)} type="button" >{item.isSet}</button>
            )

          })}
        </div>
      </div>
    );
  }





}



export default App;
