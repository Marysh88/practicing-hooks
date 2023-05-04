import React, { useState , useEffect } from 'react'

const CounterFunctional = () => {

    const [counter,setCounter] = useState(0)
    const tick = () => {
        setCounter((prevCounter)=>( prevCounter+1))
   }

   useEffect(
    ()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    }
  ,[] )

  /* 
    const tick = ()=>{
        setCounter(counter+1)
    }

    useEffect(
    ()=>{
        const interval = setInterval(tick,1000)
        return ()=>{
            clearInterval(interval)
        }
    }
  ,[counter])
*/

  return (
    <div className='flex flex-col items-center mt-[50px]'>
        <h1 className='w-[30px] h-[30px] rounded-[50%] bg-[red] text-[#fff] flex justify-center items-center' >{counter}</h1>
      </div>
  )
}

export default CounterFunctional
