import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import logo from '../../../public/Assets/graduation-hat.png';
import bg from '../../../public/Assets/reshot-illustration-login-security-page-JNGY2AVZEB.png';
import Link from 'next/link';
import {FcGoogle} from 'react-icons/fc';
import { AuthContext } from '@/Context/AuthProvider';
import { useRouter } from 'next/router';
import Aos from 'aos';


const Login = () => {
    const {signInwithGoogle, login} = useContext(AuthContext);
    const router = useRouter();
    console.log(router)
    const navigateTo = () => router.push('/')

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    
        login(email, password)
        .then((result:any) => {
          const user = result.user;
          navigateTo();
          form.reset();
        })
        .catch((err:any) => console.log(err.message))
      };
    
      const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then((result:any) => {
            console.log(result.user)
            navigateTo();
        })
        .catch((error:any)=> console.error(error))
    }

    useEffect(()=>{
        Aos.init()
    },[])
    
    return (
        <div className='min-h-screen login-wrapper relative grid grid-cols-2 items-center'>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <Image src={bg} alt="login-bg"/>
            </div>
            <div data-aos='fade-left' data-aos-duration="2000" className='flex justify-center items-center'>
                <div className='w-3/4'>
                    <div className="nav-logo flex gap-2 items-center mb-5">
                        <Image src={logo} alt="" className="w-10" />
                        <h2 className="text-2xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
                    </div>
                    <h2 className='text-2xl font-medium text-slate-800 mb-5'>Log In</h2>
                    <form onSubmit={handleSubmit} className="login-form flex flex-col gap-5">
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input type="email" name="email" required placeholder='Enter Email' className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Password</label>
                            <input type="password" name="password" required placeholder='Enter Password' className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>

                        <button className='bg-secondary rounded font-medium text-white p-2 mb-2'>Login</button>

                        <div className='divider h-[1px] mb-6 text-center bg-gray-400'>
                            <span className='bg-white relative -top-[0.7em] px-4'>OR</span>
                        </div>
                        <button type='submit' onClick={handleGoogleSignIn} className='border rounded py-2 -mt-3 text-center relative font-medium hover:bg-secondary hover:text-white transition-colors'><span className='absolute left-2 top-1/2 -translate-y-[50%] text-2xl'><FcGoogle/></span><span>Log In with Google</span></button>
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