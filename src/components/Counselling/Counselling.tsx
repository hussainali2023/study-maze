import { CiPercent, CiCircleInfo } from 'react-icons/ci'
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';
const Counselling = ({ course }: any) => {
    return (
        <Link href={`/studies/${course?._id}`}>
            <div className='flex bg-white px-10 rounded-lg shadow-lg shadow-slate-300 py-7'>
                <div className='basis-4/5'>
                    <h3 className=" text-2xl font-bold mb-6">{course?.studyName}</h3>
                    <p className='text-sm'>{course?.description}</p>

                    <p className='mt-8 mb-6 text-lg font-semibold'>{course?.degree} <span className="text-red-500">/</span> Part-Time <span className="text-red-500">/</span> Blended</p>
                    <div className='flex items-start gap-3'>
                        <img width="40" height="40" className="w-10 h-10" src={course?.photo?.logo} alt="logo" />
                        <div>
                            <p className='text-[#05293C] text-sm mb-1'>{course?.institute}</p>
                            <p className='text-xs flex items-center gap-1 text-slate-600'><SlLocationPin />{course?.location.state}, {course?.location.country}</p>
                        </div>
                    </div>
                </div>
                <div className='grid basis-1/5'>
                    <div className=''>
                        {/* <p className=' bg-red-50 rounded-2xl text-sm px-3'>Check match</p> */}
                        {/* <CiPercent className=' w-8 h-8' /> */}
                        {/* <BsHeart className=' w-6 h-6 mt-1 ml-2' /> */}
                        <p className='text-right text-lg font-bold'>{course?.tuitionFee} EUR / year</p>

                    </div>
                    {/* <div className=' mt-12 mb-2 flex bg-red-50 rounded-xl pl-4'><p>Add to compare</p> <input className=' mt-1 ml-2' type="checkbox" name="" id="" /></div> */}
                    <div className='flex justify-end items-end'>
                        <p className='text-right text-lg font-bold'>{course?.duration} year</p>

                        {/* <p>Feature </p>
                        <CiCircleInfo className=' mt-1 ml-1' /> */}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Counselling;