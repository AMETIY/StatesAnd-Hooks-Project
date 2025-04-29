import React, { Component } from 'react'
import './EvenCounterDisplay.css'
export default class EvenCounterDisplay extends Component {
 

  render() {
    const {evenCount} = this.props
const evenCounts = evenCount % 2 ===0 ?evenCount :evenCount -1;

    return (
      <>
        <div className='evenCounter'>
<hr />
    <h2>Hello This is Even Counter Display World </h2>
    {/* <h3>Clicked {evenCount}</h3> */}
    <h3>Clicked {evenCounts}</h3>
</div>
      </>
    )
  }
}
