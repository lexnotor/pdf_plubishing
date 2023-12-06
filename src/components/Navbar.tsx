import Image from "next/image";
import logo from "@/assets/images/logo_text.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Search from "./Search";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <figure>
                <a href="/">
                    <Image
                        alt="dian fossey gorilla fund"
                        src={logo}
                        width={200}
                        height={100}
                        className="w-auto"
                        title="Dian Fossey Gorilla Fund Logo"
                    />
                </a>
            </figure>

            <nav>
                <ul className="flex justify-between gap-8 [&>li:hover]:text-primary [&>li]:duration-500 [&>li]:cursor-pointer">
                    <li className="text-primary">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#our-programs">Our Programs</a>
                    </li>
                    <li>
                        <a
                            href="https://gorillafund.org/who-we-are/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                        >
                            <span>About Us</span>
                            <span className="text-lg">
                                <HiArrowTopRightOnSquare />
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#contact-us">Contact</a>
                    </li>
                </ul>
            </nav>

            <div>
                <Search />
            </div>

            <div>
                <LanguageSwitch />
            </div>
        </div>
    );
};

export default Navbar;
