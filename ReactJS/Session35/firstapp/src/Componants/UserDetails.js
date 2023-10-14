import { useState } from "react";
function UserDetails() {
    const [name, setName] = useState('Sakshi')
    const [age] = useState(22)

    return (
        <>
            <div className="fs-3 text-warning p-1">
                <p>My name is {name}</p>
                <p>age: {age}</p>
                <button onClick={()=>setName("Mukesh")} className="btn btn-dark">Change Name</button>
            </div>
        </>
    )
}
export default UserDetails;