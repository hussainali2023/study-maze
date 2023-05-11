import Image from 'next/image';
import logo from '../../../public/assets/graduation-hat.png';
import toast from 'react-hot-toast';
import Meta from '@/components/head/meta';
const Apply = () => {

    const handleFormSubmit = (event: any) => {
        event.preventDefault();
        toast.success("submit complete")

    }

    return (
        <>
            <Meta title="Apply form"></Meta>
            <div className='max-w-5xl mx-auto mt-20'>
                <div className='flex flex-col items-center'>
                    <Image src={logo} width={90} height={90} alt=""></Image>
                    <h1 className='text-5xl font-semibold text-gray-700'>Give your Information</h1>
                </div>
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 w-1/2 mx-auto gap-5 py-20">
                    <div className='flex flex-col gap-2'>
                        <label>Full Name</label>
                        <input type="text" name="name" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input type="email" name="email" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Phone</label>
                        <input type="text" name="phone" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>City</label>
                        <input type="text" name="city" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Country</label>
                        <input type="text" name="country" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Address</label>
                        <input type="text" name="address" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Last GPA</label>
                        <input type="text" name="gpa" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Financial Information</label>
                        <input type="text" name="info" required className='outline-none border focus:border-secondary py-2 px-3 rounded' />
                    </div>
                    <button type='submit' className='bg-secondary rounded font-medium text-white p-2 mb-2'>Submit</button>
                </form>
            </div>
        </>

    );
};

export default Apply;