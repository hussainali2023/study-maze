import Link from "next/link";

const OurPartners = () => {
    return (
        <div className="p-20 bg-white">
            <h1 className="text-4xl font-bold text-secondary mb-10">Our Partners</h1>
            <div className="partners grid grid-cols-3 gap-5">
                <div className="partner-card bg-white p-5 rounded shadow-md">
                    <h2 className="text-xl text-[#05293C] font-semibold mb-4">IELTS</h2>
                    <p className="text-xs text-gray-500 mb-5">You want to make sure you pass the IELTS test with a good score? Take a course. We're offering you a great reduction.</p>
                    <Link href="#" className="text-sm text-green-700">Start preparing for IELTS today!</Link>
                </div>
                <div className="partner-card bg-white p-5 rounded shadow-md">
                    <h2 className="text-xl text-[#05293C] font-semibold mb-4">PTE</h2>
                    <p className="text-xs text-gray-500 mb-5">Take an English test accepted by thousands of institutions worldwide. Book PTE Academic today and get results typically within 48 hours.</p>
                    <Link href="#" className="text-sm text-green-700">Learn more</Link>
                </div>
                <div className="partner-card bg-white p-5 rounded shadow-md">
                    <h2 className="text-xl text-[#05293C] font-semibold mb-4">Aon International Student Insurance</h2>
                    <p className="text-xs text-gray-500 mb-5">Partner with Aon to give you peace of mind during your stay and studies abroad.</p>
                    <Link href="#" className="text-sm text-green-700">Discover your options</Link>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;