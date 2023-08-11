// data
import { links } from "../utils/data";
import { motion } from "framer-motion";
// import { useActiveSectionTitle } from "../context/activeSectionNavbar";
import { Link } from "react-scroll";

function Navbar() {
  // const { activeTitle, setActiveSectionTitle } = useActiveSectionTitle();

  return (
    <nav className="flex justify-center relative top-3 z-[1]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="backdrop-blur-sm bg-white/80 p-3 rounded-full shadow-md fixed"
      >
        <ul className="flex justify-center items-center">
          {links.map((link, index) => {
            return (
              <li key={index} className="px-2 md:px-4 xl:px-4">
                <Link
                  className="transition-all text-[0.9rem] hover:font-bold hover:text-[1rem] cursor-pointer"
                  activeClass="font-bold md:py-2 md:px-3 md:rounded-full md:bg-slate-200"
                  smooth={true}
                  duration={150}
                  spy={true}
                  to={link.link}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
