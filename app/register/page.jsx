import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-gradient-to-tr from-zinc-50 to-transparent flex flex-col justify-center min-h-screen'>
        
        <form className='w-[90%] mx-auto border shadow shadow-orange-600 px-4 py-6 rounded'>
            <h1 className='text-2xl font-bold text-center uppercase'>Register</h1>
            <div className='grid'>
                <label htmlFor="username">Name:</label>
                <input type="text" name="username" id="username" placeholder='Enter username..'
                className='px-3 py-2 border rounded-md focus:shadow'/>
            </div>
            <div className='grid mt-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter email..'
                className='px-3 py-2 border rounded-md focus:shadow'/>
            </div>
            <div className='grid mt-3'>
                <label htmlFor="username">Password:</label>
                <input type="text" name="username" id="username" placeholder='Enter username..'
                className='px-3 py-2 border rounded-md focus:shadow'/>
            </div>
            <div className='grid mt-3'>
                <label htmlFor="username">Confirm Password:</label>
                <input type="text" name="username" id="username" placeholder='Enter username..'
                className='px-3 py-2 border rounded-md focus:shadow'/>
            </div>

            <button className="w-full mt-6 block text-center mx-auto py-3 px-6 bg-black rounded-md text-white hover:opacity-80">
                Sign Up
            </button>

            <div className='mt-2'>Already have account? <Link href={'/login'} className='text-blue-600 hover:text-orange-600'>Login</Link></div>

        </form>
    </div>
    
  )
}

export default page