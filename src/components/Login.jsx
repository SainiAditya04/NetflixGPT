import React, { useState } from 'react'
import Header from './Header'
import NetflixBg from "../assets/netflixBg.png";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div >
            <Header />

            <div className='w-[100%] h-[100vh] absolute'>
                <img src={NetflixBg} alt="" />
            </div>

            <form className='relative w-3/12 h-[60vh] mx-auto top-[150px] flex flex-col gap-4 text-left bg-black p-5 bg-opacity-80 rounded-md'>
                <p className='text-white font-semibold text-2xl'>{isSignIn ? "Sign In" : "Sign Up"}</p>
                {
                    !isSignIn &&
                    <input type="text" placeholder="Full name" className='rounded-md p-4 bg-gray-700' />
                }
                <input type="email" placeholder="Email address" className='rounded-md p-4 bg-gray-700' />
                <input type="password" placeholder='Password' className='rounded-md p-4 bg-gray-700' />
                <button className='text-white text-sm rounded-md bg-red-600 py-3'>{isSignIn ? "Sign in" : "Sign Up"}</button>

                {
                    isSignIn ?
                        <div className='flex gap-3 text-white items-center justify-center text-sm'>
                            <p>New to Netflix ?</p>
                            <p className='font-semibold cursor-pointer' onClick={toggleSignIn}>Sign up now</p>
                        </div>
                        :
                        <div className='flex gap-3 text-white items-center justify-center text-sm'>
                            <p>Already have an account ?</p>
                            <p className='font-semibold cursor-pointer' onClick={toggleSignIn}>Sign in now</p>
                        </div>
                }
            </form>
        </div>
    )
}

export default Login
