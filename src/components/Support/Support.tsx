import img1 from '../../../public/Assets/student.png'
import img2 from '../../../public/Assets/recruitment.png'
import img3 from '../../../public/Assets/school.png'
import {useState} from 'react'
import Image from 'next/image';
import 'aos/dist/aos.css';
import AOS from 'aos'
import {useEffect} from 'react'
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
const [isStudent, setIsStudent] = useState(true)
const [isRecruitment, setIsRecruitment] = useState(false)
const [isSchool, setIsSchool] = useState(false)

const activeButton = "bg-[#f95c39] hover:bg-[#f95c39] text-white";
const deactivateButton = "text-black hover:bg-[#f95c39]"

const studentHandler = () => {
    setIsStudent(true)
    setIsRecruitment(false)
    setIsSchool(false)
}

const recruitmentHandler = () => {
    setIsRecruitment(true)
    setIsStudent(false)
    setIsSchool(false)
}
const schoolHandler = () => {
    setIsSchool(true)
    setIsRecruitment(false)
    setIsStudent(false)
}

useEffect (()=>{
AOS.init()
}, [])

    return (
           <section className="py-10 md:py-16">
            <div className="mx-4 md:mx-8">
                <h3 className="text-2xl md:text-5xl font-bold text-center">A Platform That Supports You End-to-End</h3>
            </div>
            <div className="flex justify-center items-center">
                <div className="text-center my-8 md:my-12 flex justify-center bg-red-100 rounded-full">
                    <button onClick={studentHandler} className={` px-20 py-2 rounded-full font-semibold text-sm hover:text-white ${isStudent ? activeButton : deactivateButton}`}>
                        STUDENTS
                    </button>
                    <button onClick={recruitmentHandler} className={` px-20 rounded-full font-semibold text-sm hover:text-white ${isRecruitment ? activeButton : deactivateButton}`}>
                        RECRUITMENT PARTNERS
                    </button>
                    <button onClick={schoolHandler} className={` px-20 rounded-full font-semibold text-sm hover:text-white ${isSchool ? activeButton : deactivateButton}`}>
                        SCHOOL PARTNERS
                    </button>
                </div>
            </div>
           

           <div>
            {
                isStudent && <>
                <div className=' grid grid-cols-2 pr-64 mt-20'>
                <div className=' pl-64'>
                        <div data-aos="fade-right"
     data-aos-duration="1000">
         <h3 className=' text-xl font-semibold mb-4'>Students</h3>
                            <p>We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and schools that align with your background, skills, and interests.</p>
                            <button className=' mt-6 text-lg font-semibold px-5 py-2 rounded-lg text-white bg-primary'>Learn More</button>
</div>
                           
                        </div>
                    <div className=''>
                    <div data-aos="zoom-in-left" data-aos-duration="3000">
<Image src={img1} alt=''/>
</div>
                    </div>
                </div>
                </>
            }
            {
                isRecruitment && <>
                <div className=' grid grid-cols-2 pr-64 mt-20'>
                <div className='pl-64'>
                        <div data-aos="fade-right"
     data-aos-duration="1000">
         <h3 className=' text-xl font-semibold mb-4'>Recruitment Partners</h3>
                            <p>StudyMaze is more than a platform—we are your trusted partner—here to help you do what you do best: help as many students as possible fulfill their international education dreams.</p>
                            <button className=' mt-6 text-lg font-semibold px-5 py-2 rounded-lg text-white bg-primary'>Learn More</button>
</div>
                           
                        </div>
                    <div>
                    <div data-aos="zoom-in-left" data-aos-duration="3000">
<Image src={img2} alt=''/>
</div>
                    </div>
                </div>
                </>
            }
            {
                isSchool && <>
                <div className=' grid grid-cols-2 pr-64 mt-20'>
                <div className=' pl-64'>
                        <div data-aos="fade-right"
     data-aos-duration="1000">
         <h3 className=' text-xl font-semibold mb-4'>Partner School</h3>
                            <p>Increase your global presence and the number of qualified students from a single, easy-to-use platform trusted by more than 1,750 institutions worldwide.</p>
                            <button className=' mt-6 text-lg font-semibold px-5 py-2 rounded-lg text-white bg-primary'>Learn More</button>
</div>
                           
                        </div>
                    <div>
                        <div data-aos="zoom-in-left" data-aos-duration="3000">
<Image src={img3} alt=''/>
</div>
                    </div>
                </div>
                </>
            }
           </div>

            {/* <div className="py-6 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-3 mx-2 md:mx-6">
                {
                    supportData.map(data => <>
                    <div className=' grid grid-cols-2'>
                        <div>
                        <div data-aos="fade-right"
     data-aos-duration="1000">
         <h3 className=' text-xl font-semibold mb-4'>{data.title}</h3>
                            <p>{data.description}</p>
                            <button className=' mt-6 text-lg font-semibold px-5 py-2 rounded-lg text-white bg-primary'>Learn More</button>
</div>
                           
                        </div>
                        <div>
                        <div data-aos="zoom-in-left" data-aos-duration='3000'><Image src={data.image} alt=''/></div> 
                            
                        </div>
                    </div>
                    
                    </>)
                        
                            
                        
                    
                }
            </div> */}



        </section>
    );
};

export default Support;