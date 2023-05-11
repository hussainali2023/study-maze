import { Button } from "../buttonGroup/button";


const SearchCourseCard = ({ data }: any) => {
    return (
        <div className="mx-auto">
            <div>
                <div className="flex justify-center items-center py-2 md:py-4">
                    <img src={data?.image} className="w-40 h-12" alt="Course Photo" />
                </div>
                <div className="py-2">
                    <h2 className="text-xl md:text-2xl text-center text-gray-600">{data?.title}</h2>
                </div>
                <div className="py-2">
                    <h2 className="text-lg md:text-xl text-center text-[#aaa9ae]">{data?.body}</h2>
                </div>
                <div className="text-center py-2">
                    {/* <button className="px-6 md:px-8 py-2 border border-[#f95c39] rounded-md text-[#f95c39]">{data?.btnContent}
                    </button> */}
                    <Button>{data?.btnContent}</Button>
                </div>

            </div>
        </div>
    );
};

export default SearchCourseCard;