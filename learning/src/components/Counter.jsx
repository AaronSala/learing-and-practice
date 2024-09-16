import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        setCount(count-1)
    }
    const handleReset = () => {
        setCount(0)
    }
    const handleIncreament = () => {
        setCount(count+1)
    }


    
  return (
    <div>
      <h2 className="count">{count}</h2>
      <div>
        <button className="btn" onClick={handleDecrement}>
          decrease
        </button>
        <button className="btn" onClick={handleReset}>
          reset
        </button>
        <button className="btn" onClick={handleIncreament}>
          increase
        </button>
      </div>
    </div>
  );
}

export default Counter
