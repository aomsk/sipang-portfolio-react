import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <div>
        <span className="absolute">
          <AiFillHeart className="heart1 relative top-[6rem] left-6 text-red-500 text-2xl rotate-[-25deg]" />
        </span>
        <img
          src="../static/images/avatar2.jpg"
          alt="avatar"
          className="w-[200px] h-[200px] rounded-full"
        />
      </div>
      <div className="mt-3 text-center">
        <h1 className="text-2xl font-bold">Hello I'm Sipang!</h1>
        <h4>I want to Web Developer</h4>
        <div className="flex justify-center mt-2">
          <FaInstagram className="w-[20px] h-[20px] ml-2" />
          <FaGithub className="w-[20px] h-[20px] ml-2" />
          <FaFacebook className="w-[20px] h-[20px] ml-2" />
        </div>
      </div>
      <div className="mt-10">
        <a href="#profile">
          <IoIosArrowDown className="w-[20px] h-[20px]" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
