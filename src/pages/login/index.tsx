import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Assets/graduation-hat.png';
import bg from '../../../public/Assets/reshot-illustration-login-security-page-JNGY2AVZEB.png';
import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc';


const Login = () => {
    return (
        <div className='min-h-screen login-wrapper relative grid grid-cols-2 items-center'>
            <div>
                <Image src={bg} alt="login-bg"/>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-3/4'>
                    <div className="nav-logo flex gap-2 items-center mb-5">
                        <Image src={logo} alt="" className="w-10" />
                        <h2 className="text-2xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
                    </div>
                    <h2 className='text-2xl font-medium text-slate-800 mb-5'>Log In</h2>
                    <form className="login-form flex flex-col gap-5">
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input type="text" name="email" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        {/* {
                    errors.email &&
                    <p className="error-message">{errors.email}</p>
                } */}
                        <div className='flex flex-col gap-2'>
                            <label>Password</label>
                            <input type="password" name="password" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        {/* {
                    errors.password &&
                    <p className="error-message">{errors.password}</p>
                } */}
                        <button className='bg-secondary rounded font-medium text-white p-2 mb-2'>Login</button>
                        {/* {errors.general && <p className="error-message">{errors.general}</p>} */}
                        <div className='divider h-[1px] mb-6 text-center bg-gray-400'>
                            <span className='bg-white relative -top-[0.7em] px-4'>OR</span>
                        </div>
                        <button className='border rounded py-2 -mt-3 text-center relative font-medium hover:bg-slate-50 transition-colors'><span className='absolute left-2 top-1/2 -translate-y-[50%] text-2xl'><FcGoogle/></span><span>Log In with Google</span></button>
                        <button>Forgot Password?</button>
                        <p className='text-center'>
                            New user? <Link href="/register">Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;