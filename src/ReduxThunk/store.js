import { applyMiddleware, createStore } from "redux";
import { userReducer } from './reducer';
import thunk from "redux-thunk";

const userStore = createStore(userReducer,applyMiddleware(thunk));

export default userStore;