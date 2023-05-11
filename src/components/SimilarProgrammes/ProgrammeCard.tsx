import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';

const ProgrammeCard = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch(`https://study-maze-server.vercel.app/courses`)
            .then(res => res.json())
            .then(data => {
                setCourse(data.slice(0, 4));
            })
    }, [])

    return (
        <>
            {
                course.map((c: any) => <div className='rounded-md shadow'>
                    <div className='h-40 overflow-hidden'>
                        <img src={c.photo?.background} className='w-full h-full' alt="" srcSet="" />
                    </div>
                    <div className='p-5 bg-white rounded-b-md'>
                        <div className='flex items-start justify-between gap-3 mb-5'>
                            <Link href="#" className='text-lg text-[#05293C] font-semibold'>{c?.studyName}</Link>
                            <button className='text-[#05293C] hover:text-primary'><FiHeart className='text-2xl' /></button>
                        </div>
                        <div className='flex items-start gap-3'>
                            <img src={c.photo?.logo} className="w-10 h-10" alt="" srcSet="" />
                            <div>
                                <p className='text-[#05293C] text-sm mb-1'>{c?.institute}</p>
                                <p className='text-xs flex items-center gap-1 text-slate-600'><SlLocationPin />{c?.location?.state} , {c.location?.country}</p>
                            </div>
                        </div>
                    </div>
                </div>)

            }
        </>


    );
};

export default ProgrammeCard;