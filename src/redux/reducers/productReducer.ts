import {ActionTypes} from "../constans/action-types";
import {Actions, IState} from "../types";


const initialState: IState = {
    products: []
}

export const productReducer = (state = initialState, action: Actions): IState => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {...state}
        default: return  state
    }
}