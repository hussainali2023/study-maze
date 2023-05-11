import SearchCourseCard from "./SearchCourseCard";
import logo from '../../../public/Assets/graduation-hat.png'
import Image from "next/image";
import { Button } from "../buttonGroup/button";

const LookingCourseSection = () => {

    

    return (
       <section className=" bg-[#f1f5fa] mx-auto py-16">
        <h1 className=" text-center text-5xl font-medium">What course are you looking for ?</h1>
        <div className="flex justify-center pt-20">
        <div className=" grid grid-cols-3 gap-36">
            <div data-aos="zoom-in" data-aos-duration="3000">
<div className="flex justify-center"><Image src={logo} className=" w-20" alt=""></Image></div>
<div className="text-center"> <h1 className="text-2xl font-semibold pb-4">Bachelor's Programmers</h1>
<p className=" text-lg pb-6">Choose from more than 100,000 Bachelor’s <br /> programmes at universities, <br /> colleges and schools worldwide.</p>
</div>
<div className="flex justify-center">
    <Button>Bachelor's Programme</Button>
</div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000">
<div className="flex justify-center"><Image src={logo} className=" w-20" alt=""></Image></div>
<div className="text-center"> <h1 className="text-2xl font-semibold pb-4">Master's Programmers</h1>
<p className=" text-lg pb-6">Find out more than 200,00 Master’s <br /> programmes at universities, <br /> colleges and schools worldwide.</p>
</div>
<div className="flex justify-center">
    <Button>Master's Programme</Button>
</div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="3000">
<div className="flex justify-center"><Image src={logo} className=" w-20" alt=""></Image></div>
<div className="text-center"> <h1 className="text-2xl font-semibold pb-4">Phd's Programmers</h1>
<p className=" text-lg pb-6">Choose from more than 1000 Phd’s <br /> programmes at universities, <br /> colleges and schools worldwide.</p>
</div>
<div className="flex justify-center">
    <Button>Phd's Programme</Button>
</div>
            </div>

        </div>
        </div>
       </section>
    );
};

export default LookingCourseSection;