import React, { useState, useEffect } from "react";

const MousePositionFunctional = () => {
  const [display, setDisplay] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const handleDisplay =()=>{
    setDisplay(
        prevDisplay => (!prevDisplay)
    )
  }

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div className='flex flex-col items-center '  >
      <button
        className="bg-[red] text-[#fff] p-[10px] rounded-[4px] hover:bg-[#333] "
        onClick={handleDisplay}
      >
        {display ? `Dont show` : `Show the position`}
      </button>
      {display ? (
        <div  >
          <h3>x: {x}</h3>
          <h3>y: {y}</h3>
        </div>
      ) : null}
    </div>
  );
};

export default MousePositionFunctional;
