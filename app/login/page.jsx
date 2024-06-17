import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gradient-to-tr from-zinc-50 to-transparent flex flex-col justify-center min-h-screen'>
        
        <form className='w-[90%] mx-auto border shadow shadow-orange-600 px-4 py-6 rounded'>
            <h1 className='text-2xl font-bold text-center uppercase'>Login</h1>
            <div className='grid'>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" placeholder='Enter username..'
                className='px-3 py-2 border border-black rounded-md focus:shadow'/>
            </div>
            <div className='grid mt-3'>
                <label htmlFor="username">Password:</label>
                <input type="text" name="username" id="username" placeholder='Enter username..'
                className='px-3 py-2 border border-black rounded-md focus:shadow'/>
            </div>

            <button className="w-full mt-6 block text-center mx-auto py-3 px-6 bg-black rounded-md text-white hover:opacity-80">
                Login
            </button>

            <div className='mt-2'>Don&apos;t have account yet? <Link href={'/register'} className='text-blue-600 hover:text-orange-600'>Signup</Link></div>

        </form>
    </div>
    
  )
}

export default page