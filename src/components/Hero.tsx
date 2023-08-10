import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { runFireWorks } from "../utils/conffeti";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveSectionTitle } from "../context/activeSectionNavbar";

function Hero() {
  const { setActiveSectionTitle } = useActiveSectionTitle();

  useEffect(() => {
    setTimeout(() => {
      runFireWorks();
    }, 300);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <span className="absolute">
          <AiFillHeart className="heart1 relative top-[6rem] left-6 text-red-500 text-2xl rotate-[-25deg]" />
        </span>
        <img
          src="../static/images/avatar2.jpg"
          alt="avatar"
          className="w-[200px] h-[200px] rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="mt-3 text-center">
          <div>
            <h1 className="text-2xl font-bold">Hello I'm Sipang!</h1>
            <h4 className="mb-5">I want to be a Web Developer</h4>
            <a
              href=""
              download
              className="bg-black text-white px-3 py-2 rounded-full gap-2 transition-all hover:text-[18px] cursor-pointer"
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <FaInstagram className="w-[20px] h-[20px] ml-2" />
            <FaGithub className="w-[20px] h-[20px] ml-2" />
            <FaFacebook className="w-[20px] h-[20px] ml-2" />
          </div>
        </div>
        <div className="mt-10">
          <a href="#profile" onClick={() => setActiveSectionTitle("Profile")}>
            <IoIosArrowDown className="w-[20px] h-[20px]" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
