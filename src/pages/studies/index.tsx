import Counselling from "@/components/Counselling/Counselling";
import CategoriesSidebar from "@/components/categories-components/CategoriesSidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Categories = () => {
    const router = useRouter();
    const { category, location } = router.query;
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                "https://study-maze-server.vercel.app/courses"
            );
            const data = await response.json();
            setCourses(data);
        }
        fetchData();
    }, []);
    
    return (
        <section className="">
            <div className="text-2xl flex-none md:flex py-10 md:py-16">
                <div className=" w-full md:w-1/4 min-h-fit mx-2 md:mx-4 border-2 rounded-md static md:fixed">
                    <div className="py-4 md:py-8 bg-white">
                        <div>
                            <CategoriesSidebar></CategoriesSidebar>
                        </div>
                    </div>
                </div>
                <div className=" bg-white w-full ">
                    <div className="grid grid-cols-1 md:grid-cols-7">
                        <div className="col-span-1 md:col-span-2"></div>
                        <div className="col-span-1 md:col-span-5 py-2">
                            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                                Bachelor's degrees from all around the world
                            </h1>
                            <p className="text-gray-500">
                                Page 1 | 108 Bachelors
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#edf3f6] ml-96">
                        <div className="min-h-screen grid gap-5 p-5">
                            {courses
                                ?.filter((course: any) => {
                                    return category === ""
                                        ? []
                                        : course?.category.includes(category);
                                })
                                .map((course: any) => (
                                    <Counselling
                                        key={course._id}
                                        course={course}
                                    ></Counselling>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
