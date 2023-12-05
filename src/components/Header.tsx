import bg_mountain from "@/assets/images/bg_mountain.jpg";
import play_icon from "@/assets/images/custom_play.svg";
import Image from "next/image";
import { OpacityBtn } from "./Button";
import Navbar from "./Navbar";
import Space from "./Space";

const Header = () => {
    return (
        <header
            className="px-10 py-6 flex flex-col gap-8 justify-between text-white h-screen min-h-fit max-h-[60rem] bg-cover"
            style={{ backgroundImage: `url(${bg_mountain.src})` }}
        >
            <Navbar />

            <Space />

            <p className="self-center text-5xl font-bold flex flex-col items-center">
                <span>Uncover enchanting stories and connect</span>
                <span>with the beauty of the natural world.</span>
            </p>

            <figure className="self-center">
                <Image alt="play icon" src={play_icon} width={150} />
            </figure>

            <p className="self-center flex flex-col items-center">
                <span>
                    Gorillas are beautiful, resilient animals. But poaching and
                    habitat destruction
                </span>
                <span>
                    have pushed their populations to the brink of extinction in
                    recent decades
                </span>
            </p>

            <div className="self-center flex gap-6 items-center">
                <OpacityBtn>Our latest Programmes</OpacityBtn>
                <OpacityBtn type="secondary">Follow Our Journey</OpacityBtn>
            </div>
        </header>
    );
};

export default Header;
