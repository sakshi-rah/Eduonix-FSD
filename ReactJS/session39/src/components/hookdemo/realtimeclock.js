import React, { useEffect, useState } from 'react'

function Realtimeclock() {
    const[time, setTime]=useState(new Date());

    useEffect(()=>{
        const Interval = setInterval(()=>setTime(new Date()), 1000)
        return ()=> clearInterval(Interval);
    },[])

    return (
        <div>
            <h1>Real Time Clock ⏱</h1>
            <h3>Current Time:👉 {time.toLocaleTimeString()}</h3>
        </div>
    )
}

export default Realtimeclock