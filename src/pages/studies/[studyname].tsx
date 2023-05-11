import Image from "next/image";
import cover from "../../../public/Assets/images/Harvard_University.633b09686b7cb.avif";
import logo from "../../../public/Assets/images/Harvard_shield_wreath.svg.png";
import { FiHeart } from 'react-icons/fi';
import { SlCalender } from 'react-icons/sl';
import { BsStarFill, BsStarHalf, BsArrowRight } from 'react-icons/bs';
import { MdOutlineWatchLater, MdOutlineAttachMoney } from 'react-icons/md';
import { FaUniversity, FaRegPaperPlane } from 'react-icons/fa';
import Link from "next/link";
import SimilarProgrammes from "@/components/SimilarProgrammes/SimilarProgrammes";
import OurPartners from "@/components/OurPartners/OurPartners";
import Scholarship from "@/components/Scholarship/Scholarship";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const studyname = () => {
    const router = useRouter();
    // const param = URLSearchParams();
    const { studyname } = router.query;
    const [studyNameId, setStudyNameId] = useState('');
    const [courses, setCourses] = useState([]);
    const { category, degree, description, duration, institute, location, photo, programme, studyName, tuitionFee }: any = courses;
    // console.log(router?.query?.studyname);


    // useEffect(()=>{
    //     setStudyNameId(studyname)
    // }, [studyname])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://study-maze-server.vercel.app/courses/${studyname}`);
            const data = await response.json();
            setCourses(data);
        }
        if (studyname !== undefined) {
            fetchData();
        }

    }, [studyname]);

    console.log(courses, category)


    return (
        <div>
            <div className="relative">
                <div className="max-h-screen overflow-hidden relative">
                    <img src={photo?.background} className="w-full" alt="" srcSet="" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full p-20 grid items-end">
                    <div className="grid grid-cols-12 items-end">
                        <div className="col-span-4 bg-white rounded p-6 grid items-start gap-5 shadow-md">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex gap-3">
                                    <button className="border border-[#05293C] rounded-full text-sm py-2 px-3">{degree}</button>
                                    <button className="border border-[#05293C] rounded-full text-sm py-2 px-3">On Campus</button>
                                </div>
                                <div>
                                    <button><FiHeart className="text-2xl text-[#05293C]" /></button>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#05293C] text-sm mb-2">{institute}</p>
                                <h1 className="flex items-start gap-3 font-bold text-2xl text-[#05293C]"><FaUniversity className="text-3xl" />{studyName}</h1>
                            </div>
                            <div>
                                <Link href={`/studies/apply`}>
                                    <button className="bg-primary hover:bg-[#f95c39d2] transition flex items-center gap-2 justify-center text-white font-semibold text-lg py-2 rounded w-full">Apply <FaRegPaperPlane /></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 translate-y-1/2 w-full px-20">
                    <div className="grid grid-cols-4 items-center justify-around h-full shadow-md py-8 bg-white rounded">
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><MdOutlineWatchLater /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">{duration} Years</h1>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><MdOutlineAttachMoney /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">{tuitionFee} EUR<span className="text-base font-normal">/year</span></h1>
                                <p>Tution fee</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><FaRegPaperPlane /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">Jun 2023</h1>
                                <p>Apply date</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><SlCalender /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">Aug 2023</h1>
                                <p>Start date</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-24 pt-24 pb-16 grid grid-cols-12 gap-10">
                <div className="col-span-8">
                    <h2 className="text-2xl text-[#05293C] font-bold mb-3">About</h2>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="col-span-4 shadow-md p-5 border rounded">
                    <div className="flex gap-5 mb-5">
                        <img src={photo?.logo} className="w-14 h-14" alt="" srcSet="" />
                        <div>
                            <h2 className="text-xl text-[#05293C]">{institute}</h2>
                            <p className="text-sm">{location?.state} , {location?.country}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between mb-5">
                        <div>
                            <h2 className="text-xl text-[#05293C]">001 <span className="text-sm text-slate-600">(ARWU)</span></h2>
                            <p className="text-sm">World ranking</p>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#05293C] flex items-center gap-2">4.4
                                <span className="text-[#FFD700] flex text-base">
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarFill />
                                    <BsStarHalf />
                                </span>
                            </h2>
                            <p className="text-sm">6 reviews</p>
                        </div>
                    </div>
                    <p className="text-sm">Featured by</p>
                    <Link href="" className="text-sm text-[#05293C] hover:underline flex items-center gap-1">{institute} <BsArrowRight /></Link>
                </div>
            </div>
            <SimilarProgrammes></SimilarProgrammes>
            <OurPartners></OurPartners>
            <Scholarship></Scholarship>
        </div>
    );
};

export default studyname;