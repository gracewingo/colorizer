import React, { Component } from 'react';
import "./Colorizer.css";

class Colorizer extends Component {
  constructor(props){
    super(props);
    this.state = {
      background: "rgb(163, 145, 145)"
    }
    this.getNewColor = this.getNewColor.bind(this);
  }

  getNewColor(event){
    event.preventDefault();
    const newColor = this._input.value;

    if (newColor){
      this.setState(function(prevState){
        return {
          background: prevState.background = newColor
        }
      })
    } 
    this._input.value = "";
  }

  render(){
    return (
      <div className="color-picker-main">
        <div className ="header">
          <div className = "color-circle" style={{background: this.state.background}}>
          </div>
          <form onSubmit = {this.getNewColor}> 
              <input placeholder="enter a color" ref={(el) => this._input = el}/>
              <button>go</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Colorizer; 

