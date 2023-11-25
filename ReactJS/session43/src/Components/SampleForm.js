import { useReducer } from "react"


const UPDATE_FILED = "UPDATE_FILED";
const SUBMIT_FORM = "SUBMIT_FORM";

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FILED:
            return { ...state, [action.field]: action.value };
        case SUBMIT_FORM:
            console.log('Form Submitted ', state);
            return state;
        default:
            return state;

    }
}

function SampleForm() {

    const initialFormState = { firstName: '', lastName: '', email: '' }

    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleFieldChange = (field, value) => {
        dispatch(
            {
                type: UPDATE_FILED, field, value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: SUBMIT_FORM })
    }

    return (
        <div>
            <h3>Sample Form Reducer Example</h3>

            <form onSubmit={handleSubmit} className="bg-warning w-50 m-auto p-3 rounded my-5 fs-5">

                <label className="form-label">First Name:</label>
                <input type="text" value={formState.firstName} className="form-control w-50 m-auto"
                    onChange={(e) => handleFieldChange('firstName', e.target.value)}></input>
                <br />

                <label>Last Name:</label>
                <input type="text" value={formState.lastName} className="form-control w-50 m-auto"
                    onChange={(e) => handleFieldChange('lastName', e.target.value)}></input>
                <br />

                <label>Email:</label>
                <input type="text" value={formState.email}className="form-control w-50 m-auto"
                    onChange={(e) => handleFieldChange('email', e.target.value)}></input>
                <br />
                <button type="submit" className="btn btn-primary px-5">Submit</button>

            </form>
        </div>
    )
}

export default SampleForm;