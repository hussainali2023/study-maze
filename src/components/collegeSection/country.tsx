import { Button } from "../buttonGroup/button";

const Country = () => {
    return (
        <div className="py-20">
            <h1 className="text-xl lg:text-5xl font-bold text-gray-700 text-center">Explore Popular Universities and Colleges</h1>
            <div className="mt-20 flex flex-col lg:flex-row justify-evenly font-semibold text-gray-700">
                <Button className="uppercase hover:bg-blue-100 hover:text-primary translate-x-0 duration-500 delay-300 rounded-md p-2 ">United Kingdom</Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">Canada</Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">United States</Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">Australia</Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">Ireland</Button>
            </div>
        </div>
    );
};

export default Country;