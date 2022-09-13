import { createStore } from "redux"
import {bakeryReducer} from "./reducer";

//redux store
const bakeryStore = createStore(bakeryReducer);

export default bakeryStore;