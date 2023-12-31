import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { runFireWorks } from "../utils/conffeti";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useTheme } from "../hooks/useTheme";

function Hero() {
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      runFireWorks();
    }, 300);
  }, []);

  return (
    <section
      id="home"
      className={`hero-bg-${theme} flex flex-col items-center justify-center h-full dark:bg-slate-900 dark:text-slate-200`}
    >
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
        <img src="../static/images/avatar2.jpg" alt="avatar" className="w-[200px] h-[200px] rounded-full shadow-lg" />
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
              href="../../static/Full-Stack Developer.pdf"
              download
              className="bg-black dark:bg-slate-800 text-white text-[15px] px-4 py-2 rounded-full gap-2 transition-all hover:text-[17px] cursor-pointer shadow-lg"
            >
              Download Resume
            </a>
          </div>
          <div className="flex justify-center mt-5">
            <a href="https://www.instagram.com/aomj_sk" target="_blank">
              <FaInstagram className="w-[20px] h-[20px] ml-2" />
            </a>
            <a href="https://github.com/aomsk" target="_blank">
              <FaGithub className="w-[20px] h-[20px] ml-2" />
            </a>
            <a href="https://www.facebook.com/AOMJSK/" target="_blank">
              <FaFacebook className="w-[20px] h-[20px] ml-2" />
            </a>
            <a onClick={() => window.open("mailto:sipangdev@gmail.com")}>
              <TbMailFilled className="w-[22px] h-[22px] ml-2 cursor-pointer mt-[-1px]" />
            </a>
          </div>
        </div>
        <div className="mt-10">
          <Link
            to={"profile"}
            smooth={true}
            // duration={180}
            spy={true}
            offset={5}
            className="cursor-pointer"
          >
            <IoIosArrowDown className="w-[20px] h-[20px]" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
