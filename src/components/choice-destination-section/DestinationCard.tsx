import { BsArrowRight } from "react-icons/bs";
const DestinationCard = ({ data }: any) => {
    return (
        <div data-aos='flip-right' data-aos-duration='3000' className=" h-56 mx-auto">

            <div>
                <img className="w-full mt-0 pt-0" src={data?.image} alt="" />
            </div>
            <div className="border-x border-b rounded-md">
                <div className="flex flex-col justify-around items-start h-28 font-semibold">
                    <div className=" mt-2 ms-2">
                        <h1 className="text-xl">{data?.title}</h1>
                    </div>
                    <div className=" mt-2 ms-2">
                        <button className="text-[#f95c39] hover:text-[#f5c4ba]">
                            <div className="flex justify-center items-center">
                                <p>Explore</p> <p className="mt-1 mx-1"> <BsArrowRight></BsArrowRight></p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationCard;