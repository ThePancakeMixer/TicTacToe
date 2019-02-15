import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const tictactoe = [
  [{
    index:0,
    isSet:""      
  },
  {
    index:1,
    isSet:""      
  },  {
    index:2,
    isSet:""      
  } ],  [{
    index:3,
    isSet:""      
  },  {
    index:4,
    isSet:""      
  },  {
    index:5,
    isSet:""      
  }],  [{
    index:6,
    isSet:""      
  },  {
    index:7,
    isSet:""      
  },  {
    index:8,
    isSet:""      
  }]
]




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:tictactoe,
      turn:true,
      winner:"",
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.serialize = this.serialize.bind(this);
    this.checkForWin = this.checkForWin.bind(this);

  }


  checkForWin(){
    let arr = this.state.list;
    let row,col;

    var chars_toCheck = ['O','X'];

    let checker = false;


    for(let j=0;j<2;j++){
      var char = chars_toCheck[j];
      for(let i=0;i<3;i++){
        if(arr[i][0].isSet === char && arr[i][1].isSet === char && arr[i][2].isSet === char)
          return char;

        if(arr[0][i].isSet === char && arr[1][i].isSet === char && arr[2][i].isSet === char)
            return char;
      }  
      if(arr[0][0].isSet === char && arr[1][1].isSet === char&& arr[2][2].isSet === char){
        return char;
      }
      if(arr[2][0].isSet === char && arr[1][1].isSet === char && arr[0][2].isSet === char){
        return char;
      }
    }





    return "";
  }



  serialize(arr){
    let newArr = [];
    for(var i=0;i<arr.length;i++)
      newArr = newArr.concat(arr[i]);
    const r = newArr;

    return r;


  }

  onDismiss(e){
    let row = Math.floor(e/3);
    let col = e%3;
    this.state.list[row][col].isSet = this.state.turn?"X":"O";
    this.state.turn = !this.state.turn;
    this.state.winner = this.checkForWin();
    this.setState(this.state);

  }

  render() {
    return (
      <div className="App">
        <div className="grid">
          {this.serialize(this.state.list).map(function(item){
            return (
              <button className="cell" onClick={()=>this.onDismiss(item.index)} type="button" >{item.isSet}</button>
            )

          }.bind(this))}
        </div>

        <h1>{this.state.winner===""?"":"Winner is " + this.state.winner}</h1>
      </div>
    );
  }





}



export default App;
