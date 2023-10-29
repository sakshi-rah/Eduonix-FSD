import React, { useState } from 'react'

function Tooglebtn() {
    const [ison, setIson] = useState(false);

    const toggleButton = () => {
        setIson(!ison);
    };
    return (
        <div>
            <button onClick={toggleButton} className='btn btn-warning mb-5'>{ison? 'ON': 'OFF'}</button>
        </div>
    )
}

export default Tooglebtn;