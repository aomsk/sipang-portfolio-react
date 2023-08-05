import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import "../src/styles/App.css";
// data
import { skills_lang, skills_frame, skills_tools } from "./utils/skills";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const menu: string[] = ["Profile", "Projects", "Contact"];
  return (
    <>
      <Navbar menu={menu} />
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
      <section id="profile" className="flex flex-col items-center h-auto xl:h-full pt-5 bg-red-200">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="grid grid-rows-2 grid-cols-1 h-full w-full">
          <div className="grid grid-cols-1 xl:grid-cols-3 bg-red-400">
            <div className="flex justify-center items-center">Live</div>
            <div className="flex justify-center items-center">Education</div>
            <div className="flex justify-center items-center">Certificate</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-green-400">
            Skills
            <div className="grid grid-cols-1 xl:grid-cols-3">
              <div>
                <h1 className="text-center">Programming Language</h1>
                <div className="flex justify-center flex-wrap bg-pink-400 p-5">
                  {skills_lang.map((skill, index) => {
                    const htmlText = skill.icon;
                    return (
                      <div
                        className="flex items-center rounded-lg transition-all duration-300 ease-out bg-white p-[.3rem] w-fit hover:bg-slate-300 m-1"
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
                <h1 className="text-center">Framework & Library</h1>
                <div className="flex justify-center flex-wrap bg-purple-400 p-5">
                  {skills_frame.map((skill, index) => {
                    const htmlText = skill.icon;
                    return (
                      <div
                        className="flex items-center rounded-lg transition-all duration-300 ease-out bg-white p-[.3rem] w-fit hover:bg-slate-300 m-1"
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
                <h1 className="text-center">Tools</h1>
                <div className="flex justify-center flex-wrap bg-orange-400 p-5">
                  {skills_tools.map((skill, index) => {
                    const htmlText = skill.icon;
                    return (
                      <div
                        className="flex items-center rounded-lg transition-all duration-300 ease-out bg-white p-[.3rem] w-fit hover:bg-slate-300 m-1"
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

      <section className="flex flex-col items-center h-full pt-5">
        <h1 className="text-2xl font-bold">My Projects</h1>
        <div className="flex justify-evenly w-[20rem] xl:w-[30rem] bg-green-100 ">
          <p>#Full-Stack</p>
          <p>#Back-end</p>
          <p>#Front-end</p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold">Contact</h1>
      </section>

      <Footer />
    </>
  );
}

export default App;
