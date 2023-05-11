import Image from "next/image";
import img1 from '../../../public/assets/blogImage/study.png'
import img2 from '../../../public/assets/blogImage/tution.png'
import img3 from '../../../public/assets/blogImage/study-australia.png'
import { HiArrowRight } from "react-icons/hi";
import styles from '../../styles/Button.module.css'
const ServiceBlog = () => {
    return (
        <div className="max-w-6xl mx-auto text-gray-800">
            <h1 className="text-5xl font-bold text-center my-10 text-gray-800">We Support Everyone in the Industry <br /> by Being Thought Leaders</h1>
            {/* service cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div data-aos='fade-right' data-aos-duration='2000' className="border-2">
                    <Image
                        src={img1}
                        alt="Picture of the author"
                        width={400}
                        height={350}
                    ></Image>

                    <div className="p-5 font-semibold flex flex-col h-72">
                        <div className="space-y-5">
                            <h3 className="text-xl">One-Year Study <br /> Programs in Canada</h3>
                            <p className="text-gray-600">APRIL 26, 2023</p>
                        </div>
                        <div className={`flex items-center font-bold pt-24 ${styles.linkBtn}`}>
                            <a href="">Read More </a>
                            <HiArrowRight className="text-2xl"></HiArrowRight>
                        </div>
                    </div>
                </div>
                {/* card -2 */}
                <div data-aos='fade-up' data-aos-duration='2000' className="border-2">
                    <Image
                        src={img2}
                        alt="Picture of the author"
                        width={400}
                        height={350}
                    ></Image>

                    <div className="p-5 font-semibold flex flex-col h-72">
                        <div className="space-y-5">
                            <h3 className="text-xl">International Student Tuition and Housing Costs in Canada in 2022</h3>
                            <p className="text-gray-600">APRIL 26, 2023</p>
                        </div>
                        <div className={`flex items-center font-bold pt-24 ${styles.linkBtn}`}>
                            <a href="">Read More </a>
                            <HiArrowRight className="text-2xl"></HiArrowRight>
                        </div>
                    </div>
                </div>
                {/* card-3 */}
                <div data-aos='fade-left' data-aos-duration='2000' className="border-2">
                    <Image
                        src={img3}
                        alt="Picture of the author"
                        width={400}
                        height={350}
                    ></Image>

                    <div className="p-5 font-semibold flex flex-col h-72">
                        <div className="space-y-5">
                            <h3 className="text-xl">Why Study Hospitality <br /> in Australia</h3>
                            <p className="text-gray-600">APRIL 26, 2023</p>
                        </div>
                        <div className={`flex items-center font-bold pt-24 ${styles.linkBtn}`}>
                            <a href="">Read More </a>
                            <HiArrowRight className="text-2xl"></HiArrowRight>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceBlog;