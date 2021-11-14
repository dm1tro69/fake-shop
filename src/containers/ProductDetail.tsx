import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from "axios";
import {IStateProducts, useTypeSelector} from "../redux/types";
import {useDispatch} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../redux/actions/productActionns";

const ProductDetail:FC = () => {
    const{id} = useParams<string>()
    const dispatch = useDispatch()
    const product = useTypeSelector(state => state.selected)

    const fetchProduct = async () => {
        const response = await axios.get<IStateProducts>(`https://fakestoreapi.com/products/${id}`).catch((e) => {
            console.log('Error', e)
        })
        dispatch(selectedProduct(response?.data))
    }
    useEffect(() => {
        if (id && id !== ''){
            fetchProduct()
        }
        return () => {
            dispatch(removeSelectedProduct())
        }

    },[id])

    return (

        <div className={'ui grid container'}>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">AND</div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={product.image} />
                        </div>
                        <div className="column rp">
                            <h1>{product.title}</h1>
                            <h2>
                                <a className="ui teal tag label">${product.price}</a>
                            </h2>
                            <h3 className="ui brown block header">{product.category}</h3>
                            <p>{product.description}</p>
                            <div className="ui vertical animated button" >
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )}
        </div>

    );
};

export default ProductDetail;
