import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
    products: productReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)) )