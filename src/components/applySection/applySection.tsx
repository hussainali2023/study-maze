import student from '../../../public/Assets/apply/Student.webp';
import partner from '../../../public/Assets/apply/School.webp';
import recruit from '../../../public/Assets/apply/RP.webp';
import Image from 'next/image';
import { Button } from '@/components/buttonGroup/button';
const ApplySection = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center py-20 text-gray-800'>Get Started With <span className='text-primary'>Study</span><span className='text-secondary'>Maze</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto'>
                <div data-aos='zoom-in' data-aos-duration='2000' className='border-2 border-gray-400 rounded-lg p-10'>
                    <div className='w-3/4 mx-auto'>
                        <Image
                            src={student}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        ></Image>
                    </div>
                    <div className='text-center space-y-5 text-gray-800'>
                        <h2 className='font-bold text-2xl mt-5'>Students</h2>
                        <p>
                            Are you a student looking to study abroad in Canada, the United States, the United Kingdom, Australia, or Ireland? Let our team of experts guide you through your journey.
                        </p>
                        <Button>Student Registration</Button>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='2000' className='border-2 border-gray-400 rounded-lg p-10'>
                    <div className='w-3/4 mx-auto'>
                        <Image
                            src={partner}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        ></Image>
                    </div>
                    <div className='text-center space-y-5 text-gray-800'>
                        <h2 className='font-bold text-2xl mt-5'>Partner Schools</h2>
                        <p>
                            Become an StudyMaze partner institution to diversify your campus by attracting qualified students from around the world. Connect with our Partner Relations team here.
                        </p>
                        <Button>Student Registration</Button>
                    </div>
                </div>
                <div data-aos='zoom-in' data-aos-duration='2000' className='border-2 border-gray-400 rounded-lg p-10'>
                    <div className='w-3/4 mx-auto'>
                        <Image
                            src={recruit}
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        ></Image>
                    </div>
                    <div className='text-center space-y-5 text-gray-800'>
                        <h2 className='font-bold text-2xl mt-5'>Recruitment Partners</h2>
                        <p>
                            Do you recruit prospective students who want to study in Canada, the United States, the United Kingdom, Australia, or Ireland? Become an StudyMaze Recruitment Partner.
                        </p>
                        <Button>Student Registration</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplySection;