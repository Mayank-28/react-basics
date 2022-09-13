const initialState = {
    users : [],
    error : '',
    loading: false
}

export const userReducer = (state = initialState, action)=>{
    if(action.type == 'fetch-user-req'){
        return {
            ...state,
            loading:true
        }
    }
    else if(action.type == 'fetch-user-succ'){
        return {
            ...state,
            loading:false,
            users: action.payload,
            error : 'no error'
        }
    }
    else if(action.type == 'fetch-user-error'){
        return {
            ...state,
            loading:false,
            error : action.payload,
            users : []
        }
    }
    else {
        return state;
    }
}