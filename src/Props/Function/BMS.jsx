/*

Props are arguments passed into React components.

Props are passed to components via HTML attributes.
React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

*/


import React from 'react'
import Card from './Card'

function BMS() {
  return (
    <div className='container mt-5 mb-5'>
        <h1 className='text-center mb-5'>Movie List</h1>
        <div className='row'>
            <Card img="https://via.placeholder.com/600/92c952" title="ABC" desc="accusamus beatae ad facilis cum similique qui sunt"/>
            <Card img="https://via.placeholder.com/600/771796" title="PQR" desc="accusamus beatae ad facilis cum similique qui sunt"/>
            <Card img="https://via.placeholder.com/600/24f355" title="XYZ" desc="accusamus beatae ad facilis cum similique qui sunt"/>
        </div>
    </div>
  )
}

export default BMS