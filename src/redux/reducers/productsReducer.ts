import {ActionTypes} from "../constans/action-types";
import {Actions, IState} from "../types";


const initialState: IState = {
    products: []
}

export const productsReducer = (state = initialState, action: Actions): IState => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}

        default: return  state
    }
}

export const selectedReducer = (state = {}, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: return  state
    }
}