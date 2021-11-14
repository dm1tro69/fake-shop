import React from 'react';
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    const{id} = useParams()
    console.log(id)
    return (
        <div>
           <h1>ProductDetail</h1>
        </div>
    );
};

export default ProductDetail;
