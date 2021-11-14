import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    allProducts: productReducer
})

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))