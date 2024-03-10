import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';

export default function Cart() {

  const [cart, setCart] = useState({})

  async function getLoggedInCartProduct(){
    try {
      const {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/cart', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    setCart(data);
    } catch (error) {
      console.log(error)
    }
  }

  async function removeProductFromCart(productId){
    const {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/'+productId,{
      headers: {
        token: localStorage.getItem('token')
      }
    })
    setCart(data);
  }

  async function clearCart(){
    const {data} = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart',{
      headers: {
        token: localStorage.getItem('token')
      }
    })
    setCart(data);
  }

  async function updateCartProductCount(productId, count){
    const {data} = await axios.put('https://ecommerce.routemisr.com/api/v1/cart/')
  }

  useEffect(()=>{
    getLoggedInCartProduct();
    
  }, [])
  return <>

{cart.data?.products.length > 0 ? 
  <div className='my-5'>
      <button onClick={clearCart} className='btn btn-outline-danger d-block ms-auto'>Clear Cart</button>

      {cart.data?.products.map((cartProducts, index)=>{
       return <CartProduct key={index} removeProductFromCart={removeProductFromCart} cartProducts={cartProducts}/>
      })}

      <div className='d-flex justify-content-between'>
        <a className='btn bg-main text-white'>CheckOut</a>
        <p>Total cart Price: {cart.data?.totalCartPrice} EGP</p>
      </div>

    </div> 
    : 
   <h2 className='alert alert-warning text-center my-5'>No products in your cart</h2>
    }
  </>
}
