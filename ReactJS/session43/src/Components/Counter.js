import { useReducer } from "react";

const reducer=(state,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {count:state.count+1};
        case 'DECREMENT':
            return {count:state.count-1};
        default:
            return state;
    }
}


function Counter(){

    const[state,dispatch]=useReducer(reducer,{count:0});

    return (
        <div className="fs-4 bg-dark text-light p-5 w-50 my-5 rounded m-auto">
            <h2>Counter component</h2>
            <p className="text-danger ">Count: {state.count}</p>
            <button onClick={()=>dispatch({type:'INCREMENT'})} className="btn btn-warning mx-5"> + </button>
            <button onClick={()=>dispatch({type:'DECREMENT'})} className="btn btn-success mx-5"> - </button>
        </div>
    )

}

export default Counter;