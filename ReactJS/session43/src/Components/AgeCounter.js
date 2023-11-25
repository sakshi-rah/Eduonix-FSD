import { useReducer, useState } from "react";

function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    throw Error('Unknown Action.');
}


function Agecounter() {

    const [state, dispatch] = useReducer(reducer, { age: 20 });
    const [value, setValue] = useState(null);
    return (
        <div className="fs-5 p-3 ">
            <input type="text" placeholder="Enter Your Name..." onChange={(e) => { setValue(e.target.value) }} />
            <p> Hello! {value} you are {state.age}. year Old.</p>
            <button className='btn btn-info' onClick={() => { dispatch({ type: 'incremented_age' }) }}> Increment Age</button>

        </div>
    )

}

export default Agecounter;