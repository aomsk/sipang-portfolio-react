import { useState } from "react";
import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const links = [
    {
      title: "Profile",
      link: "#profile",
    },
    {
      title: "My Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  return (
    <nav className="w-full absolute top-0 left-0 z-[1]">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
        <div className="font-bold text-xl cursor-pointer flex items-center text-gray-800">
          <span></span>
          Sipang K.
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-[.8rem] cursor-pointer md:hidden "
        >
          {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-out ${
            open ? "top-10 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {links.map((itme, index) => (
            <li key={index} className="md:ml-8 text-[.9rem] font-bold md:my-0 my-7">
              <a
                href={itme.link}
                className="uppercase text-gray-800 hover:text-gray-400 hover:text-lg duration-500"
              >
                {itme.title}
              </a>
            </li>
          ))}

          <li className="md:ml-8 text-[.9rem] font-bold md:my-0 my-7">
            {theme === "light" ? (
              <BsFillCloudSunFill
                className="w-[20px] h-[20px] mt-[-10px] cursor-pointer"
                onClick={() => setTheme("dark")}
              />
            ) : (
              <BsFillCloudMoonFill
                className="w-[20px] h-[20px] mt-[-10px] cursor-pointer"
                onClick={() => setTheme("light")}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
