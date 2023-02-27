import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {MainReducer} from "./MainReducer";


export const store =createStore(MainReducer, composeWithDevTools());