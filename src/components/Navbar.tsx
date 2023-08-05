import { BsFillCloudSunFill, BsFillCloudMoonFill } from "react-icons/bs";

interface NavbarProps {
  menu: string[];
}

function Navbar({ menu }: NavbarProps) {
  return (
    <nav className="absolute w-full">
      <div className="flex justify-between items-center px-5 xl:px-10 h-[50px]">
        <h1 className="text-lg font-bold">Sipang K.</h1>
        <ul className="flex">
          {menu.map((item, index) => (
            <li key={index}>
              <a href="" className="mx-1 md:mx-2 xl:mx-3 font-bold">
                {item}
              </a>
            </li>
          ))}
          <li>
            <BsFillCloudSunFill />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
