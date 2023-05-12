import Image from "next/image";
import logo from "../../../public/Assets/graduation-hat.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiHeart, FiUser } from 'react-icons/fi';
import { RxExit } from 'react-icons/rx';
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "@/Context/AuthProvider";
const Header = () => {
    const [categories, setCategories] = useState();
    const router = useRouter();
    console.log(router)
    const [searchCategory, setSearchCategory] = useState("");
    const [searchLocation, setSearchLocation] = useState("");
    const {user, logOut} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://study-maze-server.vercel.app/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleCategory = (event: any) => {
        const category = event.target.value;
        setSearchCategory(category)
        console.log(category)
    }
    const handleLocation = (event: any) => {
        const location = event.target.value;
        setSearchLocation(location)
    }


    return (
        <div className="h-16 px-20 sticky top-0 z-50 bg-white flex items-center justify-between shadow">
            <Link href="/" className="nav-logo flex gap-2 items-center">
                <Image src={logo} alt="" className="w-8" />
                <h2 className="text-xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
            </Link>
            <div>
                <div>
                    <form className="flex search">
                        <select onChange={handleCategory} name="category" className="outline-none border rounded-l text-sm px-3 py-2 focus:border-primary" id="category">
                            <option value="">What to study?</option>
                            {
                                (categories as unknown as any)?.map((category: any) => <option key={category._id} value={category.name}>{category.name}</option>)
                            }
                        </select>
                        <select onChange={handleLocation} name="location" className="outline-none border text-sm px-3 py-2 focus:border-primary" id="location">
                            <option value="">Where to study?</option>
                            <option value="China">China</option>
                            <option value="Italy">Italy</option>
                            <option value="Ireland">Ireland</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                        <Link href={`/studies?category=${searchCategory}&location=${searchLocation}`} className="flex items-center bg-primary text-white px-3 rounded-r text-xl"><AiOutlineSearch /></Link>
                    </form>
                </div>
            </div>
            <div className="flex gap-5">
                <button className="flex flex-col items-center text-slate-700 hover:text-primary transition"><FiHeart className="text-2xl" /><span className="text-sm">Wishlist</span></button>
                {
                    !user ?
                    <Link href='/login' className="flex flex-col items-center  text-slate-700 hover:text-primary transition"><FiUser className="text-2xl" /><span className="text-sm">Sign in</span></Link>
                    :
                    <button onClick={logOut} className="flex flex-col items-center text-slate-700 hover:text-primary transition"><RxExit className="text-2xl" /><span className="text-sm">Log out</span></button>
                }
            </div>
        </div>
    );
};

export default Header;


