import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1);
    }

    const decrement = ()=>{
      if(!count===0){
        setCount(count - 1);

      }
  }

  return (
    <div className='m-3'>
    <h1>Counter App</h1>
        <h4>Count: {count}</h4>
        <button onClick={increment} className='btn btn-primary m-3'>Increment</button>
        <button onClick={decrement} className='btn btn-success m-3'>Decrement</button>

    </div>
  )
}

export default Counter;