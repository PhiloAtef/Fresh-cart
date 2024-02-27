/* eslint-disable no-useless-escape */
/* eslint-disable eqeqeq */
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading]= useState(false)
  const navigate = useNavigate()

  const yupvalidate = Yup.object({
    email: Yup.string()
    .required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email format"),
    password: Yup.string()
    .required("Password is required").matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Password must contain at least one special character, one number, and must be between 6 to 16 characters")
  })

  const{values, handleSubmit, handleChange, errors, touched, handleBlur, isValid} = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    onSubmit: async () => {
      setErrorMsg('');
      //calling api and registering form values is called here
      try {
        setIsLoading(true);
        let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', values);
        if (data.message == "success") {
          navigate('/home')
        }
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
      setIsLoading(false)
    }, validationSchema: yupvalidate
  })

  return <>
    <div className="w-75 m-auto my-5">
      <h1>Login :</h1>
      <form onSubmit={handleSubmit}>
       
        <label htmlFor="email" className='my-1'>Email:</label>
        <input value={values.email} type="email" className='form-control mb-3' id='email' name='email' onChange={handleChange} onBlur={handleBlur}/>
        {errors.email && touched.email && <p className='alert alert-danger'>{errors.email}</p>}
        <label htmlFor="password" className='my-1'>Password:</label>
        <input value={values.password} type="password" className='form-control mb-3' id='password' name='password' onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && touched.password && <p className='alert alert-danger'>{errors.password}</p>}

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        {isLoading ? 
        <button disabled type='button' className='btn bg-main px-4 text-white ms-auto d-block'> <i className='fas fa-spin fa-spinner px-3'></i> </button>
        :
        <button type='submit' disabled={!isValid || isLoading} className='btn bg-main px-3 text-white ms-auto d-block'>Login</button>
        }

      </form>
    </div>
  </>
}


