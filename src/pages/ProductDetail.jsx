import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/product';

const ProductDetail = () => {
    const params = useParams(); // chứa tham số trên url 
    let id = params.id;
    // tìm về đối tượng sản phẩm tứ product.js
    const product = products.find((product) => product.id == id);
    console.log(product);
    // xử lý khi click vào nut back quay lại route trước
    const handleBack = useNavigate();
    return (
        <>
            <div className="container">
                <button className='btn btn-danger' onClick={() => handleBack(-1)}>Back</button>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <img src={product.imag} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2>Tên sản phẩm : {product.name}</h2>
                        <h2>Giá Sản phẩm : {product.price}</h2>
                        <input type="number" placeholder='' />
                        <a>ADD To CART</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProductDetail