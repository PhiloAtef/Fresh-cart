import React from 'react'

export default function CartProduct({cartProducts, removeProductFromCart }) {
  return (
    <div className="cart-product shadow rounded-2 my-3">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img className='w-100' src={cartProducts.product.imageCover} alt="" />
          </div>
          <div className="col-md-8">
            <h2>{cartProducts.product.title}</h2>
            <h5>{cartProducts.product.category.name}</h5>
            <p className='d-flex justify-content-between'>
              <span>{cartProducts.price} EGP</span>
              <span><i className=' fas fa-star rating-color me-1'></i> {cartProducts.product.ratingsAverage}</span>
            </p>
            <p><span className='fw-bolder'>Total Price:</span> {cartProducts.count * cartProducts.price} EGP</p>
          </div>
          <div className="col-md-2">
            <button className='btn text-danger' onClick={()=>removeProductFromCart(cartProducts.product._id)} >Remove</button>
            <div className="d-flex align-items-center">
              <button  className='btn bg-main text-white mx-2'>-</button>
              <span>{cartProducts.count}</span>
              <button  className='btn bg-main text-white mx-2'>+</button>
            </div>
          </div>
        </div>
      </div>//
  )
}
