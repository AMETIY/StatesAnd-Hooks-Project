import React, { Component } from 'react'
import './EvenCounterDisplay.css'
export default class EvenCounterDisplay extends Component {
  render() {
    const {evenCount} = this.props
    return (
      <>
        <div className='evenCounter'>
<hr />
    <h2>Hello This is Even Counter Display World </h2>
    <h3>Clicked {evenCount}</h3>
</div>
      </>
    )
  }
}
