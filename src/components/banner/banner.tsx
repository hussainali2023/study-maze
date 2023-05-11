import styles from '../../styles/Banner.module.css'
import banner from '../../../public/assets/banner/Frame.png'
import Image from 'next/image';
import { Button } from '../buttonGroup/button';
const Banner = () => {

    return (
        <div className='max-w-screen max-h-screen relative'>
            <Image alt='' src={banner} />
            <div className='absolute top-40 left-20 space-y-5'>
                <h1 className='text-6xl font-bold text-gray-100'>We Are on a <br /> Mission to <br /> Educate the World</h1>
                <Button>I am a student exploring studying aboard</Button>
            </div>
        </div>
    );
};

export default Banner;