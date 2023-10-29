import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

  return (
    <div>
    <h2>Counter App</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter