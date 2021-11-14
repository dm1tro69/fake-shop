import React, {FC, useEffect} from 'react';
import {IStateProducts, useTypeSelector} from "../redux/types";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setProducts} from "../redux/actions/productActionns";

const ProductListing:FC = () => {

    const products = useTypeSelector(state => state.allProducts)


    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get<IStateProducts[]>('https://fakestoreapi.com/products').catch((e) => {
            console.log(e, 'Error')
        })
        dispatch(setProducts(response?.data))

    }
    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div className={'ui grid container'}>
           <ProductComponent/>
        </div>
    );
};

export default ProductListing;
