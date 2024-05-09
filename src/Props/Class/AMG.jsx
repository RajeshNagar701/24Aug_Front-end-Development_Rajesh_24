
import React, { Component } from 'react'
import ACard from './ACard'

export class AMG extends Component {
  render() {
    return (
      <div className='container mt-5 mb-5'>
        <h1 className='text-center mb-5'>Movie List</h1>
        <div className='row'>
          <ACard img="https://via.placeholder.com/600/92c952" title="ABC" desc="accusamus beatae ad facilis cum similique qui sunt" />
          <ACard img="https://via.placeholder.com/600/771796" title="PQR" desc="accusamus beatae ad facilis cum similique qui sunt" />
          <ACard img="https://via.placeholder.com/600/24f355" title="XYZ" desc="accusamus beatae ad facilis cum similique qui sunt" />
        </div>
      </div>
    )
  }
}

export default AMG
