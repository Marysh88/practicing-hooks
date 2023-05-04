import React, { Component } from "react";

export class CountingClassBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name:''
    };
  }
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times `;
  }

  componentDidUpdate(prevProps,prevState) {
   
    if(prevState.count !== this.state.count){
        console.log(`count has been changed`)
        document.title = `Clicked ${this.state.count} times `;
    }
  }

  handleCounting = ()=>{
    this.setState(
        prevState => (
            {count : prevState.count +1}
        )
    )
  }
  
  render() {
    return (
        <div className='flex flex-col items-center' >
        <h6 className=' w-[30px] h-[30px] bg-[red] text-[#fff] flex justify-center items-center rounded-[50%] ' >{this.state.count}</h6>
        <button onClick={this.handleCounting} className="m-[20px] mb-[40px] bg-[skyblue] p-[10px] rounded-[4px] text-[#fff] hover:bg-[#333] " >click me</button>
        <input className="bg-[#ddd] rounded-[4px] w-[140px] h-[40px] p-[10px]  "  type="text"  value={this.state.name}  onChange={e=>{this.setState({name:e.target.value})}}  />
        
      </div>
    );
  }
}

export default CountingClassBase;
