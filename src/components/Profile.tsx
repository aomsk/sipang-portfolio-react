// icon
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";

// data
import { skills_lang, skills_frame, skills_tools } from "../utils/skillsData";
import { certificates } from "../utils/data";

// Component
import BadgeSkill from "./BadgeSkill";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

function Profile() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    // if (inView) {
    //   control.start("visible");
    // } else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <section id="profile" className="flex flex-col items-center h-auto pt-[5rem]">
      <h1 className="text-2xl font-bold py-5">Profile</h1>
      <motion.div
        ref={ref}
        animate={control}
        variants={boxVariant}
        initial="hidden"
        transition={{ duration: 0.5 }}
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
        animate={control}
        variants={boxVariant}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.5 }}
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
                return <BadgeSkill key={index} name={skill.name} htmlText={htmlText} />;
              })}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Framework & Library</h1>
            <div className="flex justify-center flex-wrap p-5">
              {skills_frame.map((skill, index) => {
                const htmlText = skill.icon;
                return <BadgeSkill key={index} name={skill.name} htmlText={htmlText} />;
              })}
            </div>
          </div>
          <div>
            <h1 className="text-center font-medium">Tools</h1>
            <div className="flex justify-center flex-wrap p-5">
              {skills_tools.map((skill, index) => {
                const htmlText = skill.icon;
                return <BadgeSkill key={index} name={skill.name} htmlText={htmlText} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center py-10">
        <PiCertificateFill className="w-[30px] h-[30px]" />
        <h2 className="text-lg font-semibold mb-5">Certificate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-5">
          {certificates.map((certificate, index) => (
            <div key={index} className="card bg-base-100 shadow-lg w-auto">
              <div className="card-body text-center">
                <h2 className="font-bold text-[16px]">{certificate.cerName}</h2>
                <p>{certificate.cerDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profile;
