import React, { Component } from 'react'
import './CounterDisplay.css'
export default class CounterDisplay extends Component {
  render() {
    const {number} = this.props
    return (
      <>
<div className='counterDisplay'>
<hr />
    <h2>Hello This is Counter Display </h2>
    <h3>{number}</h3>
</div>
      </>
    )
  }
}
