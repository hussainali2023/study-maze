import gifPhoto1 from "../../../public/Assets/huss/Landing-Page-Product-Features–RP_V004.gif";
import gifPhoto2 from "../../../public/Assets/huss/Landing-Page-Product-Features–RP_V004.gif";
import photo1 from "../../../public/Assets/huss/Platform.webp";
import photo2 from "../../../public/Assets/huss/Support.webp";
import photo3 from "../../../public/Assets/huss/Studen-Loan.webp";
import photo4 from "../../../public/Assets/huss/Platform-check.webp";
import photo5 from "../../../public/Assets/huss/Chart-3.webp";

import { useState } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../buttonGroup/button";
const Support = () => {
    // const supportData = [
    //     {
    //         image: img1,
    //         title:"Students",
    //         description: "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and schools that align with your background, skills, and interests."
    //     },
    //     {
    //         image:img2,
    //         title:"Recruitment Partners",
    //         description: "StudyMaze is more than a platform—we are your trusted partner—here to help you do what you do best: help as many students as possible fulfill their international education dreams."
    //     },
    //     {
    //         image:img3,
    //         title:"Partner Schools",
    //         description: "Increase your global presence and the number of qualified students from a single, easy-to-use platform trusted by more than 1,750 institutions worldwide."
    //     },
    // ]
    const [isStudent, setIsStudent] = useState(true);
    const [isRecruitment, setIsRecruitment] = useState(false);

    const activeButton = "bg-[#f95c39] hover:bg-[#f95c39] text-white";
    const deactivateButton = "text-black hover:bg-[#f95c39]";

    const studentHandler = () => {
        setIsStudent(true);
        setIsRecruitment(false);
    };

    const recruitmentHandler = () => {
        setIsRecruitment(true);
        setIsStudent(false);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="pt-10 md:pt-16">
            <div className="mx-4 md:mx-8">
                {isStudent && (
                    <>
                        <div
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            <h3 className="text-2xl md:text-5xl font-bold text-center">
                                We Help Students Get Admitted Into the Best{" "}
                                <br /> International Educational Institutions
                            </h3>
                        </div>
                    </>
                )}
                {isRecruitment && (
                    <>
                        <div
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                        >
                            <h3 className="text-2xl md:text-5xl font-bold text-center">
                                An Easy-to-Use Platform Built to Deliver <br />{" "}
                                Quality Applications and More
                            </h3>
                        </div>
                    </>
                )}
                {/* <h3 className="text-2xl md:text-5xl font-bold text-center">A Platform That Supports You End-to-End</h3> */}
            </div>
            <div className="flex justify-center items-center">
                <div className="text-center my-8 md:my-12 flex justify-center bg-red-100 rounded-full">
                    <button
                        onClick={studentHandler}
                        className={` px-20 py-2 rounded-full font-semibold text-sm hover:text-white ${
                            isStudent ? activeButton : deactivateButton
                        }`}
                    >
                        STUDENTS
                    </button>
                    <button
                        onClick={recruitmentHandler}
                        className={` px-20 rounded-full font-semibold text-sm hover:text-white ${
                            isRecruitment ? activeButton : deactivateButton
                        }`}
                    >
                        RECRUITMENT PARTNERS
                    </button>
                </div>
            </div>

            <div>
                {isStudent && (
                    <>
                        <div>
                            <div
                                data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-offset="0"
                                className="mx-auto py-2 md:py-2"
                            >
                                <center>
                                    <Image
                                        src={gifPhoto1}
                                        className=" w-2/4"
                                        alt=""
                                    />
                                    {/* <img src= className="w-full md:w-2/3 h-auto" alt="" /> */}
                                </center>
                            </div>

                            <div
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className=" flex justify-center"
                            >
                                <div className=" py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 md:gap-32">
                                    <div>
                                        <div className="flex justify-center">
                                            <Image
                                                src={photo1}
                                                alt=""
                                                className=" w-1/3"
                                            ></Image>
                                        </div>
                                        <p className=" text-xl font-bold mt-2 text-center">
                                            Find Programme <br /> Faster{" "}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <Image
                                                src={photo2}
                                                alt=""
                                                className=" w-1/3"
                                            ></Image>
                                        </div>
                                        <p className=" text-xl font-bold mt-2 text-center">
                                            Helpful and <br /> Dedicated Support{" "}
                                            <br /> Team{" "}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center">
                                            <Image
                                                src={photo3}
                                                alt=""
                                                className=" w-1/3"
                                            ></Image>
                                        </div>
                                        <p className=" text-xl font-bold mt-2 text-center">
                                            Access to Exclusive <br />{" "}
                                            Scholarships
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center py-6 md:py-10">
                                <Button className="py-2 md:py-3 px-4 md:px-6 text-lg text-white font-medium rounded-sm capitalize bg-[#f95c39]">
                                    <Link href={"/studies?category=&location="}>
                                        Try It Today
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </>
                )}
                {isRecruitment && (
                    <>
                        <div
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0"
                            className="mx-auto py-6 md:py-8"
                        >
                            <center>
                                <Image
                                    src={gifPhoto2}
                                    className=" w-2/4"
                                    alt=""
                                />
                                {/* <img src= className="w-full md:w-2/3 h-auto" alt="" /> */}
                            </center>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            className=" flex justify-center"
                        >
                            <div className=" py-6 md:py-10 grid grid-cols-1 md:grid-cols-3 md:gap-32">
                                <div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={photo4}
                                            alt=""
                                            className=" w-1/3"
                                        ></Image>
                                    </div>
                                    <p className=" text-xl font-bold mt-2 text-center">
                                        One Easy Application <br /> Platform{" "}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={photo2}
                                            alt=""
                                            className=" w-1/3"
                                        ></Image>
                                    </div>
                                    <p className=" text-xl font-bold mt-2 text-center">
                                        Knowledgeable <br /> Support Team
                                    </p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <Image
                                            src={photo5}
                                            alt=""
                                            className=" w-1/3"
                                        ></Image>
                                    </div>
                                    <p className=" text-xl font-bold mt-2 text-center">
                                        Data Driven <br />
                                        Insights
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center py-6 md:py-10">
                            <Button className="py-2 md:py-3 px-4 md:px-6 text-lg text-white font-medium rounded-sm capitalize bg-[#f95c39]">
                                <Link href={"/studies?category=&location="}>
                                    Try It Today
                                </Link>
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Support;
