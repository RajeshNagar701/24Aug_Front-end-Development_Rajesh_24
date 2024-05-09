/*
React components has a built-in state object.
The state object is where you store property values that belong to the component.
state is mutable when you want to change , you can change ,When the state object changes, 
the component re-renders.

State in Class : The state object is initialized in the constructor:

constructor(){
    super();
    this.state={
        name:"Rajesh nagar",
        number: 0,
        isImage: true
    }
  }  
{this.state.name}

 <button onClick={() => this.setState({name:"Akash Patel"})}>Change</button>
============================================================================

State in Function

 const [name, setName] = useState("Raj nagar"); // simple var 
 {name}
 button onClick={() => setName("Akash Patel")}>Change</button>


 // object var
 const [data, setData] = useState({
        number: 0,
        isImage: true
    });

{data.number}    

<button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
                
*/

import React, { Component } from 'react'
import Class_img from './Class_img';

export class Class_state extends Component {

  constructor(){
    super();
    this.state={
        name:"Rajesh nagar",
        number: 0,
        isImage: true
    }
  }  

  render() {
    return (
        <div>
        <button onClick={() => this.setState({name:"Akash Patel"})}>Change</button>
        <h1>Hi my name is {this.state.name}</h1>
        <hr />

        <h1>
            <button onClick={() => this.setState({number: this.state.number + 1 })}>+</button>
            {this.state.number}
            <button onClick={() => { if (this.state.number > 0) { this.setState({number: this.state.number - 1 }) } }}>-</button>
        </h1>

        <hr />
        <button onClick={() => this.setState({isImage: false })}>Hide</button>
        <button onClick={() => this.setState({isImage: true })}>Show</button>
        <button onClick={() => this.setState({isImage: !this.state.isImage })}>Hide/Show</button>
        {this.state.isImage ? <Class_img/> : null}
    </div>
    )
  }
}

export default Class_state





