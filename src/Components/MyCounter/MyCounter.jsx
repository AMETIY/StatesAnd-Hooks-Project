import React, { Component } from "react";
import CounterDisplay from "../CounterDisplay/CounterDisplay";
import './MyCounter.css'
import EvenCounterDisplay from "../EvenCounterDisplay/EvenCounterDisplay";

export default class MyCounter extends Component {
  constructor() {
    // console.log(super())
    super();
    this.state = {
      count: 0,
      // evenCount: 0,
    };
  }

  allClickCounter = () => {
    this.setState((prevstate) => {       //setState(updater, [callback])
      return { count: prevstate.count + 1 };    //similar way:({count: prevstate.count + 1 })
    },

    // Callback
    // () =>{
    //   this.evenClicksCounter();
    // }
  );
  };

  // evenClicksCounter = () =>{
  //  if ((this.state.count) % 2 === 0){
  //   this.setState((prevstate) =>{
  //     return {evenCount: prevstate.evenCount + 2}
  //   })
  //  }
  // }

  render() {
    return (
      <>
        <div className="counter">
          <button onClick={this.allClickCounter}>Click Me</button>
          <CounterDisplay number={this.state.count} />
          {/* <EvenCounterDisplay evenCount = {this.state.evenCount} /> */}
          <EvenCounterDisplay evenCount = {this.state.count} />
        </div>
      </>
    );
  }
}
