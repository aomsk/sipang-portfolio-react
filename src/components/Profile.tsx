// icon
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
// data
import { skills_lang, skills_frame, skills_tools } from "../utils/skillsData";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Profile() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="profile" className="flex flex-col items-center h-auto pt-[5rem]">
      <h1 className="text-2xl font-bold py-5">Profile</h1>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="text-center w-auto px-4 md:w-[700px] xl:w-[700px] xl:px-0 py-10"
      >
        <h1 className="text-lg font-semibold mb-5">About Me</h1>
        <p className="text-justify">
          Hello, my name is Sipang, but you can call me Aom. I'm a recent graduate and I want to be
          a web developer, capable of both Frontend and Backend. Right now, I'm practicing and
          studying various technologies to improve my skills.
        </p>
      </motion.div>

      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="flex flex-col justify-center items-center text-center py-10"
      >
        <IoSchoolSharp className="w-[30px] h-[30px]" />
        <h2 className="text-lg font-semibold mb-5">Education</h2>
        <h1>King Mongkut's Institute of Technology Ladkrabang</h1>
        <h4>Bachelor of Science - Information Technology</h4>
        <p>(Software Engineer)</p>
        <p>Complete 2023</p>
      </motion.div>

      <div className="flex flex-col justify-center items-center text-center py-10">
        <FaLightbulb className="w-[30px] h-[30px]" />
        <h2 className="text-lg font-semibold mb-5">Skills</h2>
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div>
            <h1 className="text-center font-medium">Programming Language</h1>
            <div className="flex justify-center flex-wrap p-5">
              {skills_lang.map((skill, index) => {
                const htmlText = skill.icon;
                return (
                  <div
                    className="flex items-center rounded-xl transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
                    key={index}
                  >
                    <div
                      className="w-[20px] h-[20px]"
                      dangerouslySetInnerHTML={{ __html: htmlText }}
                    ></div>
                    <span className="pl-[.2rem] text-[.88rem]">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Framework & Library</h1>
            <div className="flex justify-center flex-wrap p-5">
              {skills_frame.map((skill, index) => {
                const htmlText = skill.icon;
                return (
                  <div
                    className="flex items-center rounded-xl transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
                    key={index}
                  >
                    <div
                      className="w-[20px] h-[20px]"
                      dangerouslySetInnerHTML={{ __html: htmlText }}
                    ></div>
                    <span className="pl-[.2rem] text-[.88rem]">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Tools</h1>
            <div className="flex justify-center flex-wrap p-5">
              {skills_tools.map((skill, index) => {
                const htmlText = skill.icon;
                return (
                  <div
                    className="flex items-center rounded-xl transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
                    key={index}
                  >
                    <div
                      className="w-[20px] h-[20px]"
                      dangerouslySetInnerHTML={{ __html: htmlText }}
                    ></div>
                    <span className="pl-[.2rem] text-[.88rem]">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center py-10">
        <PiCertificateFill className="w-[30px] h-[30px]" />
        <h2 className="text-lg font-semibold mb-5">Certificate</h2>
        <h1>React Real-World Projects (Udemy)</h1>
        <h1>TypeScript from Basic to Advanced (Udemy)</h1>
      </div>
    </section>
  );
}

export default Profile;
