
import React, { useEffect } from 'react'

function Func_lifeImg() {

  useEffect(()=>{
    console.log('Img componentDidMount / Birth');
  });

  useEffect(()=>{
    return(()=>console.log(' componentWillUnmount / Death'))
  })

  return (
    <div className='container mt-5'>
      <img src="https://careercenter.tops-int.com/images/TOPS-logo.png" alt="" />
    </div>
  )
}

export default Func_lifeImg
