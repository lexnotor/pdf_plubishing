import Image from "next/image";
import logo from "@/assets/images/logo_text.png";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Search from "./Search";
import LanguageSwitch from "./LanguageSwitch";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <figure>
                <Image
                    alt="dian fossey gorilla fund"
                    src={logo}
                    width={200}
                    height={100}
                    className="w-auto"
                    title="Dian Fossey Gorilla Fund Logo"
                />
            </figure>

            <nav>
                <ul className="flex justify-between gap-8">
                    <li className="text-primary">Home</li>
                    <li>Our Programs</li>
                    <li className="flex  gap-1">
                        <span>About Us</span>
                        <span className="text-lg">
                            <HiArrowTopRightOnSquare />
                        </span>
                    </li>
                    <li>Contact</li>
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
