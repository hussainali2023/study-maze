import Link from "next/link";
import { Button } from "../buttonGroup/button";

const Country = () => {
    return (
        <div className="py-20">
            <h1 className="text-xl lg:text-5xl font-bold text-gray-700 text-center">
                Explore Popular Universities and Colleges
            </h1>
            <div className="mt-20 flex flex-col lg:flex-row justify-evenly font-semibold text-gray-700">
                <Button className="uppercase hover:bg-blue-100 hover:text-primary translate-x-0 duration-500 delay-300 rounded-md p-2 ">
                    <Link href={"/studies?category=&location=United%20Kingdom"}>
                        United Kingdom
                    </Link>
                </Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">
                    <Link href={"/studies?category=&location=China"}>
                        China
                    </Link>
                </Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">
                    <Link href={"/studies?category=&location=Italy"}>
                        Italy
                    </Link>
                </Button>
                <Button className="uppercase hover:text-primary hover:bg-blue-100 translate-x-0 duration-500 delay-300 rounded-md p-2">
                    <Link href={"/studies?category=&location=Ireland"}>
                        Ireland
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Country;
