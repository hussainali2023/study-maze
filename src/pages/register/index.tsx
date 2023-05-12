import Image from 'next/image';
import registerBanner from '../../../public/Assets/registerBanner/register_banner.svg';
import google from '../../../public/Assets/logo/google.png';
import { FaUser, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Styles from '../../styles/Button.module.css'
import { useContext, useState } from 'react'
import Meta from '@/components/head/meta';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/Context/AuthProvider';
import { useRouter } from 'next/router';
import logo from '../../../public/Assets/graduation-hat.png';
import bg from '../../../public/Assets/reshot-illustration-login-security-page-JNGY2AVZEB.png';
import { FcGoogle } from 'react-icons/fc';

type FormData = {
    fullName: string;
    email: string;
    password: string;
};

const Register = () => {
    const [check, setUnCheck] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>();
    const { createUser, signInwithGoogle } = useContext(AuthContext);
    const router = useRouter();
    const navigateTo = () => router.push('/')

    const onSubmit = (data: any) => {
        console.log(data);
        const { email, password } = data

        createUser(email, password)
            .then((result: any) => {
                const user = result.user;
                navigateTo()
                console.log(user);
                reset()
            })
            .catch((err: any) => console.log(err.message));
    };

    const handleGoogleSignIn = () =>{
        signInwithGoogle()
        .then((result:any) => {
            console.log(result.user)
            navigateTo();
        })
        .catch((error:any)=> console.error(error))
    }

    return (
        <>
            <div className='min-h-screen login-wrapper relative grid grid-cols-2 items-center'>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <Image src={bg} alt="login-bg"/>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000" className='flex justify-center items-center'>
                <div className='w-3/4'>
                    <div  className="nav-logo flex gap-2 items-center mb-5">
                        <Image src={logo} alt="" className="w-10" />
                        <h2 className="text-2xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
                    </div>
                    <h2 className='text-2xl font-medium text-slate-800 mb-5'>Please Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form flex flex-col gap-5">
                        <div className='flex flex-col gap-2'>
                            <label>Name</label>
                            <input type="text"
                                {...register("fullName", { required: "full name is required" })}
                                className=' outline-none border focus:border-secondary py-2 px-3 rounded shadow-sm' placeholder='Enter Full Name' />
                            {errors.fullName && <small role='alert' className='text-red-600 text-sm'>{errors.fullName?.message}</small>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input type="email"
                                {...register("email", { required: "Email is required" })}
                                className=' outline-none border focus:border-secondary py-2 px-3 rounded shadow-sm' placeholder='Enter Email' />
                            {errors.email && <small role='alert' className='text-red-600 text-sm'>{errors.email?.message}</small>}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Password</label>
                            <input type="password"
                                {...register("password", { required: "Password is required" })}
                                className=' outline-none border focus:border-secondary py-2 px-3 rounded shadow-sm'  placeholder='Enter Password' />
                            {errors.password && <small role='alert' className='text-red-600 text-sm'>{errors.password?.message}</small>}
                        </div>
                        

                        <button type='submit' className='bg-secondary rounded font-medium text-white p-2 mb-2'>Sign Up</button>

                        <div className='divider h-[1px] mb-6 text-center bg-gray-400'>
                            <span className='bg-white relative -top-[0.7em] px-4'>OR</span>
                        </div>
                        <button type='button' onClick={handleGoogleSignIn} className='border rounded py-2 -mt-3 text-center relative font-medium hover:bg-secondary hover:text-white transition-colors'><span className='absolute left-2 top-1/2 -translate-y-[50%] text-2xl'><FcGoogle/></span><span>Log In with Google</span></button>
                     
                        <p className='text-center'>
                            Already have an account? <Link href="/login">Please Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}
export default Register;