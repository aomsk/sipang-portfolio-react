// data
import { skills_lang, skills_frame, skills_tools } from "../utils/skills";
import { BiSolidMap } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";

function Profile() {
  return (
    <section id="profile" className="flex flex-col items-center h-auto xl:h-full pt-5">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="grid grid-rows-2 grid-cols-1 h-full w-full">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="flex flex-col justify-center items-center p-5">
            <BiSolidMap className="w-[30px] h-[30px]" />
            <h2 className="text-lg font-semibold mb-5">Live</h2>
            Pathum Thani, Thailand
          </div>
          <div className="flex flex-col justify-center items-center text-center p-5">
            <IoSchoolSharp className="w-[30px] h-[30px]" />
            <h2 className="text-lg font-semibold mb-5">Education</h2>
            <h1>King Mongkut's Institute of Technology Ladkrabang</h1>
            <h4>Bachelor of Science - Information Technology</h4>
            <p>(Software Engineer)</p>
            <p>Complete 2023</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center p-5">
            <PiCertificateFill className="w-[30px] h-[30px]" />
            <h2 className="text-lg font-semibold mb-5">Certificate</h2>
            <h1>React Real-World Projects (Udemy)</h1>
            <h1>TypeScript from Basic to Advanced (Udemy)</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
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
                      className="flex items-center rounded-lg transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
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
                      className="flex items-center rounded-lg transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
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
                      className="flex items-center rounded-lg transition-all duration-300 ease-out bg-slate-100 p-[.3rem] w-fit hover:bg-slate-300 m-1"
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
      </div>
    </section>
  );
}

export default Profile;
