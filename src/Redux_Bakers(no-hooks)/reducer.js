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

exports.bakeryReducer = bakeryReducer;

exports.initialState = initialState;