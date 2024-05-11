/*
Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: 

componentDidMount()  Mounting,  Birth       component is rendered.
componentDidUpdate()  Updating,  update     component is updated in the DOM.
componentWillUnmount()  Unmounting, death   removed from the DOM.

*/


import React, { Component } from 'react'
import Class_lifeImg from './Class_lifeImg';

export class Class_Lifecycle extends Component {

  constructor(){
    super();
    this.state={
        name:"Rajesh Nagar",
        IsImage:true
    }
  }  

  componentDidUpdate(){
    console.log(' componentDidUpdate / Update')
  }

  render() {
    return (
      <div className='container mt-5'>
        <button onClick={()=>this.setState({IsImage:false})}>Hide</button>
        <button onClick={()=>this.setState({IsImage:true})}>Show</button>
        {this.state.IsImage ? <Class_lifeImg/> : null}
      </div>
    )
  }
}

export default Class_Lifecycle