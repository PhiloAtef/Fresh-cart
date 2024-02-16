import React from 'react';
export default function Register() {



  return <>
    <div className="w-75 m-auto my-5">
      <h1>Register Now :</h1>
      <form>
        <label htmlFor="name" className='my-1'>Name:</label>
        <input type="text" className='form-control mb-3' id='name' name='name' />

        <label htmlFor="email" className='my-1'>Email:</label>
        <input type="email" className='form-control mb-3' id='email' name='email' />

        <label htmlFor="password" className='my-1'>Password:</label>
        <input type="password" className='form-control mb-3' id='password' name='password' />

        <label htmlFor="rePassword" className='my-1'>RePassword:</label>
        <input type="password" className='form-control mb-3' id='rePassword' name='rePassword' />

        <label htmlFor="phone" className='my-1'>phone:</label>
        <input type="tel" className='form-control mb-3' id='phone' name='phone' />

        {/* <div className="alert alert-danger">errorMessage</div> */}

        {/* <button disabled type='button' className='btn bg-main px-3 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner'></i> </button> */}

        <button type='submit' className='btn bg-main px-3 text-white ms-auto d-block'>Register</button>
      </form>
    </div>
  </>
}
