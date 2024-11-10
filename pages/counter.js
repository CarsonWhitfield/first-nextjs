import React, { useState } from "react";

export default function Counter({ button1Color, button2Color }){
    const [count, setCount] = useState(0);

    const handleIncrementByOne = () => {
      setCount((prevCount) => {
          const newCount = prevCount + 1;
          return newCount > 10 ? 0 : newCount;
      });
  };

  const handleIncrementByTwo = () => {
    setCount((prevCount) => {
        const newCount = prevCount + 2;
        return newCount > 10 ? 0 : newCount;
    });
};



    return (
       <div>
        <p>Count: {count}</p>
        <button
                onClick={handleIncrementByOne}
                style={{ backgroundColor: button1Color }}
            >
                Add 1
            </button>
            <button
                onClick={handleIncrementByTwo}
                style={{ backgroundColor: button2Color }}
            >
                Add 2
            </button>
       </div>
      );
    }
