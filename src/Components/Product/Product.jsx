import React from 'react'


function Product({ product }) {


    return (
        <div className="col-md-3" >
            <div className="product overflow-hidden px-2 py-3 cursor-pointer">
                <a className='a'>
                    <img className='w-100' src={product.imageCover} alt="" />
                    <h5 className='font-sm text-main'>{product.category.name}</h5>
                    <h4>{product.title.split(" ").slice(0, 2).join(" ")}</h4>
                    <p className='d-flex justify-content-between'>
                        <span >{product.price} EGP</span>
                        <span>
                            <i className='fas fa-star rating-color me-1'></i>
                            {product.ratingsAverage}
                        </span>
                    </p>
                </a>
                <button className='btn bg-main text-white w-100 '>+Add To Cart</button>
            </div>
        </div>
    )
}

export default Product