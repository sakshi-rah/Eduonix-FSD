import React, { useEffect, useState } from 'react'

function Inputvalidation() {
    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (input.length <= 5) {
            setIsValid(false);
        }
        else {
            setIsValid(true);
        }
    }, [input])

    return (<div>
        <form>
            <label>Write Your Massege</label><br />
            <input type='text' id='input' placeholder='Write Something' onChange={(e) => setInput(e.target.value)}></input>
        </form>
        <br />
        <p> <span style={isValid ? { backgroundColor: 'green', color: 'white', padding: 7 } : { backgroundColor: 'red', color: 'white', padding: 7 }}>
            {isValid ? 'Valid Input' : 'Write more than 5 words'}   </span></p>
    </div>)
}


export default Inputvalidation