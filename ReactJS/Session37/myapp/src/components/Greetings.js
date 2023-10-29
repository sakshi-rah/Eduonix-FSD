import { useState } from "react"

const Greeting = () => {
    const [name, setName] = useState('');

    const handleInputChnage = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="m-5 w-50 m-auto">

            <div className="input-group flex-nowrap">
                <input type="text" value={name} onChange={handleInputChnage} className="w-50 form-control" placeholder="Enter Your Name:" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>

            <p>{name === '' ? 'Please enter your name' : `Hello ${name}!`}</p>
        </div>
    )
};

export default Greeting;