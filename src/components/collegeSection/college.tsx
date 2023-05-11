import Image from 'next/image';
import styles from '../../styles/Button.module.css'
import coventry from '../../../public/Assets/collegeLogo/Coventry-University.webp'
import middlesex from '../../../public/Assets/collegeLogo/Middlesex-University-London (1).webp'
import middlesex2 from '../../../public/Assets/collegeLogo/London-Metropolitan-University.webp';
import coventryCollege from '../../../public/Assets/collegeLogo/image/coventry.webp'
import middle from '../../../public/Assets/collegeLogo/image/Middlesex.webp'
import london from '../../../public/Assets/collegeLogo/image/london.webp'
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowRight } from 'react-icons/hi';
const College = () => {
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10'>
            <div data-aos='zoom-in' data-aos-duration="3000" className='shadow-sm outline-1 shadow-black rounded-md pb-5'>
                <div className='flex items-center justify-evenly p-5'>
                    <Image alt='' src={coventry} width={70} height={70} />
                    <div className='space-y-3'>
                        <h2 className='text-xl text-secondary font-semibold'>Coventry University</h2>
                        <div className='flex items-center space-x-3 text-gray-700'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <span>Priory Street -UK</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <Image alt='' src={coventryCollege} width={500} height={500} />
                    <p className='px-5 pb-10'>
                        Coventry University is a forward-looking, modern university with a proud tradition as a provider of high quality education and a focus on applied research.
                    </p>
                    <div className={`flex items-center font-bold px-5 transform duration-500 ${styles.linkBtn}`}>
                        <a href="">Explore More</a>
                        <HiArrowRight className="text-2xl"></HiArrowRight>
                    </div>
                </div>
            </div>
            {/* card-2 */}
            <div data-aos='zoom-in' data-aos-duration="3000" className='shadow-sm outline-1 shadow-black rounded-md pb-10'>
                <div className='flex items-center justify-evenly p-5'>
                    <Image alt='' src={middlesex} width={70} height={70} />
                    <div className='space-y-3'>
                        <h2 className='text-xl text-secondary font-semibold'>Middlesex University</h2>
                        <div className='flex items-center space-x-3 text-gray-700'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <span>The Burroughs, Hendon</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <Image alt='' src={middle} width={500} height={500} />
                    <p className='px-5 pb-10'>
                        At Middlesex University, students learn in a global community of ambitious students like themselves as well as academics, professionals and artists, industry leaders and entrepreneurs.
                    </p>
                    <div className={`flex items-center font-bold px-5 transform duration-500 ${styles.linkBtn}`}>
                        <a href="">Explore More</a>
                        <HiArrowRight className="text-2xl"></HiArrowRight>
                    </div>
                </div>
            </div>
            {/* card -3 */}
            <div data-aos='zoom-in' data-aos-duration="3000" className='shadow-sm outline-1 shadow-black rounded-md pb-5'>
                <div className='flex items-center justify-evenly p-5'>
                    <Image alt='' src={middlesex2} width={70} height={70} />
                    <div className='space-y-3'>
                        <h2 className='text-xl text-secondary font-semibold'>Middlesex University</h2>
                        <div className='flex items-center space-x-3 text-gray-700'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            <span>The Burroughs, Hendon</span>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <Image alt='' src={london} width={500} height={500} />
                    <p className='px-5 pb-5 text-justify'>
                        Based in one of the world's most exciting cities, London Metropolitan University is home to a diverse community of inspiring and determined learners, teachers, and innovative thinkers.
                    </p>
                    <div className={`flex items-center font-bold px-5 transform duration-500 ${styles.linkBtn}`}>
                        <a href="">Explore More</a>
                        <HiArrowRight className="text-2xl"></HiArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default College;