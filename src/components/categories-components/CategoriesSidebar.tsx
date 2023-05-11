import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";


const CategoriesSidebar = () => {


    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://study-maze-server.vercel.app/categories');
            const data = await response.json();
            setUniversities(data);
        }
        fetchData();
    }, []);

    // console.log(universities);


    console.log(universities);
    return (
        <>
            <section className="mx-2 md:mx-4">
                <div className="h-1 rounded-sm bg-[#f95c39] hidden md:block"></div>
                <div>
                    <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                        <h3 className='underline md:no-underline'>Categories</h3>
                    </div>
                    <div className='mt-2'>
                        <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 md:text-start'>

                            {universities?.length &&
                                universities?.map((course: any) => {
                                    return <CategoryItem
                                        key={course?._id}
                                        category={course.name}
                                        icon={course.icon}
                                    >
                                    </CategoryItem>
                                })}

                        </ul>
                    </div>
                </div>
            </section>
        </>

    );
};

export default CategoriesSidebar;