import React, { Component } from 'react'

export class CounterClassBase extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        counter:0
     }
   }
   
   tick = () => {
    this.setState(prevState=>({counter:prevState.counter+1}))   
   }

   componentDidMount(){
    this.interval = setInterval(this.tick,1000)
   }

   componentWillUnmount(){
    clearInterval(this.interval)
   }


  render() {
    return (
      <div className='flex flex-col items-center mt-[50px]'>
        <h1 className='w-[30px] h-[30px] rounded-[50%] bg-[red] text-[#fff] flex justify-center items-center' >{this.state.counter}</h1>
      </div>
    )
  }
}

export default CounterClassBase
