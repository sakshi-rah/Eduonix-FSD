import React, { useEffect, useState } from 'react'

function Timer() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
        setTimeout(() => setCount(count + 1), 1000);
    })
    return (
        <div>
            <h1>Timer Clock ⏰</h1>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default Timer