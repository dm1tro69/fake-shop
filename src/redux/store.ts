import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer, selectedReducer} from "./reducers/productsReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const rootReducer = combineReducers({
    allProducts: productsReducer,
    selected: selectedReducer
})

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))