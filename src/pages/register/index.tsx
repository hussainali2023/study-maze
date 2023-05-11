import Image from 'next/image';
import registerBanner from '../../../public/Assets/registerBanner/register_banner.svg';
import google from '../../../public/Assets/logo/google.png';
import { FaUser, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Styles from '../../styles/Button.module.css'
import { useState } from 'react'
import Meta from '@/components/head/meta';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import bg from '../../../public/Assets/reshot-illustration-login-security-page-JNGY2AVZEB.png';
import logo from '../../../public/Assets/graduation-hat.png';
import {FcGoogle} from 'react-icons/fc';
type FormData = {
    fullName: string;
    email: string;
    password: string;
    // confirmPassword: string;
};



const Register = () => {
    const [check, setUnCheck] = useState(false)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = (data: any) => {
        console.log(data);
        reset()
    }

    return (
        <>
            <Meta title="register"></Meta>
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
                    <h2 className='text-2xl font-medium text-slate-800 mb-5'>Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="login-form flex flex-col gap-5">
                        <div className='flex flex-col gap-2'>
                            <label>Name</label>
                            <input {...register("fullName")} type="text" name="fullName" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input {...register("email")} type="text" name="email" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        {/* {
                    errors.email &&
                    <p className="error-message">{errors.email}</p>
                } */}
                        <div {...register("password")} className='flex flex-col gap-2'>
                            <label>Password</label>
                            <input type="password" name="password" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                        </div>
                        {/* {
                    errors.password &&
                    <p className="error-message">{errors.password}</p>
                } */}
                        <button className='bg-secondary rounded font-medium text-white p-2 mb-2'>Sign Up</button>
                        {/* {errors.general && <p className="error-message">{errors.general}</p>} */}
                        <div className='divider h-[1px] mb-6 text-center bg-gray-400'>
                            <span className='bg-white relative -top-[0.7em] px-4'>OR</span>
                        </div>
                        <button className='border rounded py-2 -mt-3 text-center relative font-medium hover:bg-slate-50 transition-colors'><span className='absolute left-2 top-1/2 -translate-y-[50%] text-2xl'><FcGoogle/></span><span>Log In with Google</span></button>
                        {/* <button>Forgot Password?</button> */}
                        <p className='text-center'>
                     Exsisting user? <Link href="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;