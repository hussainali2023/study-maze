import Link from "next/link";
import { useContext } from "react";


const CategoryItem = ({ icon, category, location }: any) => {

    const isSelected = `/pages/category/${category?._id}` === location?.pathname;
    return (
        <li className={`${isSelected && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
            <Link href={`/studies?category=${category}`}>
                <button className="hover:text-[#f95c39]">
                    <div className="flex justify-start items-center">
                        <div className="mx-1">
                            <img src={icon} alt={icon} className="w-4 h-4" />
                        </div>
                        <div className="flex text-sm">
                            <p className="text-left">
                                {category.length < 30 ? category : category.slice(0, 19)}
                                {
                                    category.length < 30 ? "" : "..."
                                }
                            </p>

                        </div>
                    </div>
                </button>
            </Link>
        </li>
    );
};

export default CategoryItem;