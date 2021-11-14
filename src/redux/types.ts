import {ActionTypes} from "./constans/action-types";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootType} from "./store";


export type ActionTypeSelected = {
    type: typeof ActionTypes.SELECTED_PRODUCT,
    payload: any
}

export type ActionTypeSet = {
    type: typeof ActionTypes.SET_PRODUCTS,
    payload: any
}

export type ActionTypeRemove = {
    type: typeof ActionTypes.REMOVE_SELECTED_PRODUCT

}

export type Actions = ActionTypeSelected | ActionTypeSet | ActionTypeRemove




export interface IStateProducts {
    id: number
    title: string
    price?: number
    description?: string
    image?: string
    rating?: {rate: number, count: number}
    category: string
}

export interface IState {
    products: IStateProducts[]
}

export const useTypeSelector: TypedUseSelectorHook<RootType> = useSelector
