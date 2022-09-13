import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream, buyMoreIceCream } from "./action";

import { initialState } from "./reducer";

const Bakery = (props) => {

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
                <li>Cakes Left - {props.cakes}</li>
                <li>Ice Creams - {props.iceCreams}</li>
            </ul>
            <button onClick={props.buyCake}>Buy Cakes</button>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
            <br />
            <input type='number' onChange={cakeNumber} value={cakevalue} />
            <button onClick={()=>props.buyMoreIceCream(cakevalue)}>Buy More IceCreams</button>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cakes: state.cakes,
        iceCreams: state.iceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => { dispatch(buyCake()) },
        buyIceCream: () => { dispatch(buyIceCream()) },
        buyMoreIceCream: (cakevalue)=>{dispatch(buyMoreIceCream(cakevalue))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bakery);