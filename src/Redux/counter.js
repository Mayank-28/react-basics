import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
//useSelector is a function that takes the current state as an argument 
//and returns whatever data you want from it 
//and it allows us to store the return values inside a variable

    const count = useSelector((state)=>state.counter)

    //useDispatch function gives us a dispatch function which we can execute to dispatch the action
    const dispatch = useDispatch();

    function addCounter() {
        dispatch({type:'increase'})
    }

    function subCounter() {
        dispatch({type:'decrease'})
    }

    return (

        <div>
            <p>Counter value</p>
            <p>{count}</p>

            <button onClick={addCounter}>Add</button>
            <button onClick={subCounter}>Sub</button>
        </div>
    )
}

export default Counter;