import React,{useState, useEffect} from 'react'

const CountingFunctional = () => {
    const [count,setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(
        ()=>{
            document.title = `You clicked ${count} times `
        }
    ,[count])

    const handleCounting = ()=>{
        setCount(
            prevCount => (prevCount+1)
        )
    }

  return (
    <div className='flex flex-col items-center' >
      <h6 className=' w-[30px] h-[30px] bg-[red] text-[#fff] flex justify-center items-center rounded-[50%] ' >{count}</h6>
      <button onClick={handleCounting} className="m-[20px] mb-[40px] bg-[skyblue] p-[10px] rounded-[4px] text-[#fff] hover:bg-[#333] "   >click me</button>
      <input className="bg-[#ddd] rounded-[4px] w-[140px] h-[40px] p-[10px]  "  type="text"  value={name}  onChange={e=>setName(e.target.value)} />
    </div>
  )
}

export default CountingFunctional
