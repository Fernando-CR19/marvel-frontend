import React from 'react'
import { Link } from 'react-router-dom'

export default function SignInForm() {
  return (
    <div className='ml-auto mr-auto mt-36 w-3/5 rounded-md'>
        <form>
            <div className=''>
                <h4 className='text-4xl mb-4 ml-auto text-center'>Sign In</h4>
                <p className='mb-4 text-center'>Not registered on Marvel yet? <Link to='/signup' className='underline underline-offset-1 text-blue-500'>SIGN UP</Link></p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label className='mb-1'>Email</label>
                    <input type="email" name="email" className='w-full border-black border-2 rounded p-1'/>
                </div>
                <div className='flex flex-col'>
                    <label className='mb-1'>Password</label>
                    <input type="password" name="password" className='w-full border-black border-2 mb-4 rounded p-1'/>
                </div>
            </div>
            <button type ="submit" className='w-full bg-blue-800 text-white p-2 rounded'>SIGN IN</button>
        </form>
    </div>
  )
}
