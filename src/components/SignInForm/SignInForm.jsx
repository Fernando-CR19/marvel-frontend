import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

export default function SignInForm() {

    const formik = useFormik({
        initialValues: {
          Email: '',
          Password: '',
        },
        onSubmit: values => {
          console.log(values)
          // alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div className='ml-auto mr-auto mt-36 w-3/5 rounded-md'>
        <form onSubmit={formik.handleSubmit}>
            <div className=''>
                <h4 className='text-4xl mb-4 ml-auto text-center'>Sign In</h4>
                <p className='mb-4 text-center'>Not registered on Marvel yet? <Link to='/signup' className='underline underline-offset-1 text-blue-500'>SIGN UP</Link></p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label className='mb-1'>Email</label>
                    <input id="Email" type="email" name="Email" onChange={formik.handleChange} value={formik.values.Email} className='w-full border-black border-2 rounded p-1'/>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1'>Password</label>
                    <input id="Password" type="password" name="Password" onChange={formik.handleChange} value={formik.values.Password} className='w-full border-black border-2 mb-4 rounded p-1'/>
                </div>
            </div>
            <button type ="submit" className='w-full bg-blue-800 text-white p-2 rounded'>SIGN IN</button>
        </form>
    </div>
  )
}
