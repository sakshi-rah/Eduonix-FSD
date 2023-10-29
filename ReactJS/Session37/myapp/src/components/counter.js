import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

  return (
    <div className='m-3'>
    <h1>Counter App</h1>
        <h4>Count: {count}</h4>
        <button onClick={increment} className='btn btn-primary my-3'>increment</button>
    </div>
  )
}

export default Counter