import React from 'react';
import {useTypeSelector} from "../redux/types";
import {Link} from "react-router-dom";

const ProductComponent = () => {
    const products = useTypeSelector(state => state.allProducts.products)
    const renderList = products.map((product) => (
        <div key={product.id} className={'four wide column'}>
            <Link to={`/product/${product.id}`}>
            <div className={'ui link cards'}>
                <div className={'card'}>
                    <div className={'image'}>
                        <img src={product.image} alt="img"/>
                    </div>
                    <div className={'content'}>
                        <div className={'header'}>
                            {product.title}
                        </div>
                        <div className={'meta price'}>$ {product.price}</div>
                        <div className={'meta'}>{product.category}</div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    ))
    return (
       <>
           {renderList}
       </>
    );
};

export default ProductComponent;
