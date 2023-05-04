import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full flex justify-center sticky'>
      <ul className='flex  justify-between mb-[30px]'>
        <li className='mr-[10px]' ><Link to='/' >Home</Link></li>
        <li className='mr-[10px]' ><Link to='/counting-classbase' >CountingClassBase</Link></li>
        <li className='mr-[10px]' ><Link to='/counting-functional'>CountingFunctional</Link></li>
        <li className='mr-[10px]' ><Link to='/mouse-position-classbase' >MousePositionClassbase</Link></li>
        <li className='mr-[10px]' ><Link to='/mouse-position-functional' >MousePositionFunctional</Link></li> 
        <li className='mr-[10px]' ><Link to='/counter-classbase' >CounterClassbase</Link></li> 
        <li className='mr-[10px]' ><Link to='/counter-functional' >CounterFunctional</Link></li>
        <li className='mr-[10px]' ><Link to='/fetching-data' >FetchingData</Link></li>
        
      </ul>
    </div>
  )
}

export default Navbar
