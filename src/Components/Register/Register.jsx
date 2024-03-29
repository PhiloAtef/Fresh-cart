/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading]= useState(false)
  const navigate = useNavigate()

  const yupvalidate = Yup.object({
    name: Yup.string().required("name is required").min(3, "must be larger than 3").max(20,'must be 20 or less'),
    email: Yup.string()
    .required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email format"),
    password: Yup.string()
    .required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password must contain at least one special character, one number, and must be between 6 to 16 characters"),
    repassword: Yup.string().required("Re-Password is required").oneOf([Yup.ref("password")], "Password and Re-Password must match"),
    phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/, "Enter valid Egyptian phone number")
  })

  // eslint-disable-next-line no-unused-vars
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
    return errors;
  }

  const{values, handleSubmit, handleChange, errors, touched, handleBlur, isValid} = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      repassword:'',
      phone:''
    },
    onSubmit: async () => {
      setErrorMsg('');
      //calling api and registering form values is called here
      try {
        setIsLoading(true);
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
        if (data.message == "success") {
          navigate('/login')
        }
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
      setIsLoading(false)
    }, validationSchema: yupvalidate
  })

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Register Now :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className='my-1'>Name:</label>
        <input value={values.name} type="text" className='form-control mb-3' id='name' name='name' onChange={handleChange} onBlur={handleBlur} />
        {errors.name && touched.name && <p className='alert alert-danger'>{errors.name}</p>}
        <label htmlFor="email" className='my-1'>Email:</label>
        <input value={values.email} type="email" className='form-control mb-3' id='email' name='email' onChange={handleChange} onBlur={handleBlur}/>
        {errors.email && touched.email && <p className='alert alert-danger'>{errors.email}</p>}
        <label htmlFor="password" className='my-1'>Password:</label>
        <input value={values.password} type="password" className='form-control mb-3' id='password' name='password' onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && touched.password && <p className='alert alert-danger'>{errors.password}</p>}
        <label htmlFor="rePassword" className='my-1'>RePassword:</label>
        <input type="password" className='form-control mb-3' id='repassword' name='repassword' onChange={handleChange} onBlur={handleBlur} value={values.repassword} />
        {errors.repassword && touched.repassword && <p className='alert alert-danger'>{errors.repassword}</p>}
        <label htmlFor="phone" className='my-1'>phone:</label>
        <input value={values.phone} type="tel" className='form-control mb-3' id='phone' name='phone' onChange={handleChange} onBlur={handleBlur}/>
        {errors.phone && touched.phone && <p className='alert alert-danger'>{errors.phone}</p>}

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        {isLoading ? 
        <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner px-3'></i> </button>
        :
        <button type='submit' disabled={!isValid || isLoading} className='btn bg-main px-3 text-white ms-auto d-block'>Register</button>
        }

      </form>
    </div>
  </>
}


