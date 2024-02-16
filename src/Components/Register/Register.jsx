import { useFormik } from 'formik';
import React from 'react';
export default function Register() {

  function validate(values){
    const errors = {};
    if (values.name == "") {
      errors.name ='Name is  required'
    }else if(values.name.length < 3){
      errors.name = 'Min length must be more than 3'
    }else if(values.name.length > 20){
      errors.name = 'Max length must be less than 20'
    }

    if(values.email == ""){
      errors.email = 'Email required'
    }else if(!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/i).test(values.email)){
      errors.email = 'Enter valid email'
    }

    if(values.password == ""){
      errors.password = 'password required'
    }else if(!( /^(?=.[\d])(?=.[!@#$%^&])[\w!@#$%^&]{6,16}$/).test(values.password)){
      errors.password = 'password must contain at least a special character, a number and between 8 to 18 characters'
    }

    if(values.repassword == ""){
      errors.repassword = 'repassword required'
    }else if(values.password != values.repassword){
      errors.repassword = "password and repassword dont match"
    }

    if(values.phone == ""){
      errors.phone = 'phone is required'
    }else if (!(/^01[0125][0-9]{8}$/).test(values.phone)) {
      errors.phone = "enter valid egyptian number"
    }
    console.log(errors)
    return errors;
  }

  const{values, handleSubmit, handleChange, errors, touched, handleBlur} = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      repassword:'',
      phone:''
    },
    onSubmit: () => {
      //calling api and registering form values is called here
      console.log("hi")
    }, validate
  })

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Register Now :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='my-1'>Name:</label>
        <input value={values.name} type="text" className='form-control mb-3' id='name' name='name' onChange={handleChange} onBlur={handleBlur} />

        <label htmlFor="email" className='my-1'>Email:</label>
        <input value={values.email} type="email" className='form-control mb-3' id='email' name='email' onChange={handleChange} onBlur={handleBlur}/>

        <label htmlFor="password" className='my-1'>Password:</label>
        <input value={values.password} type="password" className='form-control mb-3' id='password' name='password' onChange={handleChange} onBlur={handleBlur}/>

        <label htmlFor="rePassword" className='my-1'>RePassword:</label>
        <input value={values.repassword} type="password" className='form-control mb-3' id='rePassword' name='rePassword' onChange={handleChange} onBlur={handleBlur}/>

        <label htmlFor="phone" className='my-1'>phone:</label>
        <input value={values.phone} type="tel" className='form-control mb-3' id='phone' name='phone' onChange={handleChange} onBlur={handleBlur}/>

        {/* <div className="alert alert-danger">errorMessage</div> */}

        {/* <button disabled type='button' className='btn bg-main px-3 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner'></i> </button> */}

        <button type='submit' className='btn bg-main px-3 text-white ms-auto d-block'>Register</button>
      </form>
    </div>
  </>
}
