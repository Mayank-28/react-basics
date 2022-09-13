
var myState = {counter:0};

function reducer (state=myState, action){

    if(action.type === 'increase'){
        return {
            ...state,
            counter:state.counter+1
        }
    }

    else if(action.type === 'decrease'){
        return {
            ...state,
            counter:state.counter-1
        }
    }
    else{
        return state
    }
}

export default reducer;