import React, { Component } from 'react'

export class MousePositionClassBase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display: true,
         x: 0,
         y: 0

      }
    }
    logMousePosition = e =>{
        this.setState({x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount(){
        console.log("component unmounting code");
        window.removeEventListener("mousemove", this.logMousePosition);
    }

    toggleButton =()=>{
        this.setState(
            (prevState)=>({
                display: !(prevState.display)
            })
        )
    }

  render() {
    return (
      <div className='flex flex-col items-center' >
        <button
        className="bg-[red] text-[#fff] p-[10px] rounded-[4px] hover:bg-[#333]"
        onClick={this.toggleButton}
      >
        {this.state.display ? `Dont show` : `Show the position`}
      </button>
      {this.state.display ? (
        <div>
          <h3>x: {this.state.x}</h3>
          <h3>y: {this.state.y}</h3>
        </div>
      ) : null}
      </div>
    )
  }
}

export default MousePositionClassBase
