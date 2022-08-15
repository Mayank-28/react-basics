import { Fragment, useReducer } from "react";

const reducer = (state, action) => {
    switch (action) {
        case 'Add':
            return state + 1
        case 'Sub':
            return state - 1
    }
}

const initState = 0;
const UseReducer = () => {

    //use reducer takes 2 arguments - reducer func and initState
    //use reduces gives 2 things - currState and dispatch func
    const [currState, dispatch] = useReducer(reducer, initState);
    return (
        <Fragment>
            <div>Use Reducer Example</div>
            <div>
                <button onClick={() => dispatch('Add')} >Add on Click</button>
                <button onClick={() => dispatch('Sub')} >Sub on Click</button>
            </div>
            <p>{currState}</p>
        </Fragment>
    )
}

export default UseReducer;