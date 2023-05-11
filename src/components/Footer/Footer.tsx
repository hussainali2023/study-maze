import Image from "next/image";
import logo from '../../../public/Assets/graduation-hat.png';
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="border-t-4 border-secondary">
            <div className="px-20 py-8 grid grid-cols-4 gap-10">
                <div className="grid grid-rows-2 gap-5">
                    <div>
                        <div className="nav-logo flex gap-2 items-center mb-5">
                            <Image src={logo} alt="" className="w-8" />
                            <h2 className="text-xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
                        </div>
                        <p>101 Frederick St,<br />Kitchener, ON<br />N2H 6R3</p>
                    </div>
                    <div>
                        <p className="text-lg font-medium mb-5 text-secondary">Follow us</p>
                        <div className="flex gap-4 text-xl">
                            <Link className="hover:text-primary transition" href='/'><FaLinkedinIn /></Link>
                            <Link className="hover:text-primary transition" href='/'><FaFacebookF /></Link>
                            <Link className="hover:text-primary transition" href='/'><FaInstagram /></Link>
                            <Link className="hover:text-primary transition" href='/'><FaTwitter /></Link>
                            <Link className="hover:text-primary transition" href='/'><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-5">
                    <div>
                        <p className="text-lg font-medium mb-5 text-secondary">Degrees</p>

                        <ul className="flex flex-col gap-2">
                            <li><Link href="/">Bachelors</Link></li>
                            <li><Link href="/">Masters</Link></li>
                            <li><Link href="/">PhD</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-medium mb-5 text-secondary">Discover</p>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/">Courses</Link></li>
                            <li><Link href="/">Institutions</Link></li>
                            <li><Link href="/">Register</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text-lg font-medium mb-5 text-secondary">About</p>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Our Story</Link></li>
                        <li><Link href="/">Careers</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">Press</Link></li>
                        <li><Link href="/">Life</Link></li>
                        <li><Link href="/">Leadership</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>
                <div className="grid grid-rows-2 gap-5">
                    <div>
                        <p className="text-lg font-medium mb-5 text-secondary">Resources</p>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/">Our Solutions</Link></li>
                            <li><Link href="/">UK Resources</Link></li>
                            <li><Link href="/">AU Resources</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg font-medium mb-5 text-secondary">Legal</p>
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/">Privacy & Cookies Policy</Link></li>
                            <li><Link href="/">Studymaze Fees</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                            <li><Link href="/">Modern Slavery Statement</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center py-3 text-white bg-primary">Copyright © 2023 StudyMaze</p>
        </div>
    );
};

export default Footer;