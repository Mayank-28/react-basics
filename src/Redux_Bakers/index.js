import { Fragment, useState } from "react";
import { createStore } from "redux"
import { useDispatch, useSelector, Provider } from "react-redux";

const initialState = {
    cakes: 28,
    iceCream: 20
}

//reducer function accepting initial state and action
//based on action changing the state.
const bakeryReducer = (state = initialState, action) => {
    if (action.type == 'Buy-Cake') {
        return {
            ...state,
            cakes: state.cakes - 1
        }
    }
    else if (action.type == 'Buy-IceCream') {
        return {
            ...state,
            iceCream: state.iceCream - 1
        }
    }
    else if (action.type == 'Buy-More-IceCream') {
        return {
            ...state,
            iceCream: state.iceCream - action.payload
        }
    }
    else {
        return state;
    }
}

const bakeryStore = createStore(bakeryReducer);

//main component 
const Bakery = () => {
    const dispatch = useDispatch();
    const cakes = useSelector(state => state.cakes);
    const iceCreams = useSelector(state => state.iceCream);

    const buyCake = () => {
        dispatch({ type: 'Buy-Cake' })
    }
    const buyIceCream = () => {
        dispatch({ type: 'Buy-IceCream' })
    }
    const buyMoreIceCream = (cakevalue) => {
        dispatch({ type: 'Buy-More-IceCream', payload: cakevalue })
    }

    const [cakevalue, setCakeValue] = useState(0);

    const cakeNumber = (e) => {
        setCakeValue(e.target.value)
    }
    return (
        <Fragment>
            <h6>Initial Details</h6>
            <ul>
                <li>Cakes - {initialState.cakes}</li>
                <li>Ice Creams -{initialState.iceCream}</li>
            </ul>
            <h6>After Sale</h6>
            <ul>
                <li>Cakes Left - {cakes}</li>
                <li>Ice Creams - {iceCreams}</li>
            </ul>
            <button onClick={buyCake}>Buy Cakes</button>
            <button onClick={buyIceCream}>Buy IceCream</button>
            <br />
            <input type='number' onChange={cakeNumber} value={cakevalue} />
            <button onClick={buyMoreIceCream}>Buy More IceCreams</button>
        </Fragment>
    )
}

const BakeryShop = () => {
    return (
        <Provider store={bakeryStore}>
            <div>Welcome to Bakery Shop</div>
            <Bakery />
        </Provider>
    )
}

export default BakeryShop;