import React from 'react'
import { products } from '../data/product'
import { NavLink } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    {products.map((item, index) => {
                        return (
                            <div className='col-lg-3' key={index}>
                                <div class="card">
                                    <img class="card-img-top" style={{ maxHeight: '150px' }} src={item.imag} alt="Title" />
                                    <div class="card-body">
                                        <h4 class="card-title">{item.name}</h4>
                                        <p class="card-text">{item.price}</p>
                                    </div>
                                    <NavLink to={'/product-detail/' + item.id} className="btn btn-secondary">Xem Ngay</NavLink>
                                </div>

                            </div>
                        )
                    })}


                </div>

            </div>

        </>
    )
}

export default Product