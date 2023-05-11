import Image from 'next/image';
import photo from '../../../public/Assets/images/SP_scholarship.svg';

const Scholarship = () => {
    return (
        <div className="p-20 bg-[#F6F9FA] grid grid-cols-5 items-center justify-center">
            <div className='flex justify-end col-span-2'>
                <Image className='w-[390px]' src={photo} alt='photo'></Image>
            </div>
            <div className='text-center text-[#05293C] col-span-3 px-16'>
                <h2 className='text-2xl font-semibold mb-3'>Win a €10,000 Scholarship!</h2>
                <p className='mb-5'>Apply for the Studyportals Scholarship and win up to €10,000 to cover your tuition fees. Follow your dream of studying abroad with the help of our scholarship.</p>
                <div className="flex justify-center">
                    <button className="py-2 px-4 font-semibold rounded border-2 border-[#05293C] text-[#05293C] hover:bg-[#05293c18] transition">Apply for scholarship</button>
                </div>
            </div>
        </div>
    );
};

export default Scholarship;