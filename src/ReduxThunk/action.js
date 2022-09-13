import axios from 'axios';

// the below 3 action creators returns the action
export const fetchUserRequest = ()=>{
    return {
        type: 'fetch-user-req'
    }
}

export const fetchUserSuccess = (users)=>{
    return {
        type: 'fetch-user-succ',
        payload : users
    }
}

export const fetchUserError = (error)=>{
    return {
        type: 'fetch-user-req',
        payload : error
    }
}

// by using miidleware we can return a function from action creators which we can call later
export const getUsers = () =>{
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => (res.data))
            .then(data => {
                dispatch(fetchUserSuccess(data))
            })
            .catch(error => {
                dispatch(fetchUserError(error))
            })
    }
}