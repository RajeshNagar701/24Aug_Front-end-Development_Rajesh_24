import React, { Component } from 'react'

export class Class_lifeImg extends Component {

    componentDidMount(){
        console.log(' componentDidMount / Birth')
    } 

    componentWillUnmount(){
        console.log(' componentWillUnmount / Death')
    }


  render() {
    return (
      <div className='container mt-5'>
        <img src="https://careercenter.tops-int.com/images/TOPS-logo.png" alt="" />
      </div>
    )
  }
}

export default Class_lifeImg