import degree from '../../../public/Assets/degree.svg'
import grade from '../../../public/Assets/grade.svg'
import handShake from '../../../public/Assets/hand-shake.svg'
import Image from 'next/image';
const WhyChoose = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className=' my-24 '>
            <h2 className="text-5xl font-bold text-center mb-16">Why Choose <span className="text-primary">Study</span><span className="text-secondary">maze</span> ?</h2>
            <div className=' grid grid-cols-3 px-28 font-medium'>
                <div>
                    <div className='flex justify-center mb-6'><Image className=' w-40 h-40' src={degree} alt=''></Image></div>
                    <p className=' text-xl text-center'> <span className=' text-secondary'>Improve Your Chance of <br /> Admission Success</span> <br /> <br />
                        Students who use StudyMaze <br />
                        have a 95% acceptance rate.</p>

                    <div className=" left-1/2 -ml-0.5 w-0.5  bg-gray-600"></div>
                </div>
                <div>
                    <div className='flex justify-center mb-6'><Image className=' w-40 h-40' src={grade} alt=''></Image></div>
                    <p className=' text-xl text-center'> <span className=' text-secondary'>More Opportunity
                        <br /> at Less Cost</span> <br /> <br />
                        You’ll spend half the
                        <br />
                        time and money to get an offer.</p>
                </div>
                <div>
                    <div className='flex justify-center mb-6'><Image className=' w-40 h-40' src={handShake} alt=''></Image></div>
                    <p className=' text-xl text-center'> <span className=' text-secondary'>Your One-Stop
                        <br /> Study Maze Shop</span> <br /> <br />
                        Access exclusive deals on <br /> application fees, flights, expert <br /> advice, and more.</p>


                </div>

            </div>
        </div>
    );
};

export default WhyChoose;