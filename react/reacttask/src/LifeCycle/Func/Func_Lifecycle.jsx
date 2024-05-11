/*
Lifecycle of Components

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)


useEffect runs on every render. 
That means that when the count changes, a render happens, which then triggers another effect.

*/


import React, { useEffect, useState } from 'react'
import Func_lifeImg from './Func_lifeImg'

function Func_Lifecycle() {
  const [data,setData]=useState({
    name: "Rajesh Nagar",
      IsImage: true,
      number:1,
  })

  useEffect(()=>{
    console.log('Main componentDidMount / componentDidUpdate');
  },[data.number]);


  return (
    <div className='container mt-5'>
      <button onClick={() => setData({...data, number: data.number+1 })}>+</button>
      <h1>{data.number}</h1>
      <button onClick={() => setData({...data, number: data.number-1 })}>-</button>
      <hr />
      <button onClick={() => setData({...data, IsImage: false })}>Hide</button>
      <button onClick={() => setData({...data, IsImage: true })}>Show</button>
      {data.IsImage? <Func_lifeImg/> : null}
   </div>
  )
}

export default Func_Lifecycle

