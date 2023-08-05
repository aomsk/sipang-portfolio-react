// data
import { skills_lang, skills_frame, skills_tools } from "../utils/skills";

function Profile() {
  return (
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
  );
}

export default Profile;
