import { motion } from "framer-motion";
import { Link } from "react-scroll";
// data
import { links } from "../utils/data";

function Navbar() {
  return (
    <nav className="flex justify-center relative top-3 z-[1]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="backdrop-blur-sm bg-white/80 dark:bg-slate-800 dark:text-slate-200 p-3 rounded-full shadow-lg fixed"
      >
        <ul className="flex justify-center items-center">
          {links.map((link, index) => {
            return (
              <li key={index} className="px-2 md:px-4 xl:px-4">
                <Link
                  className="transition-all text-[0.9rem] hover:font-bold hover:text-[1rem] cursor-pointer"
                  activeClass="font-bold md:py-2 md:px-3 md:rounded-full md:bg-slate-200 dark:md:bg-slate-700 dark:text-slate-200"
                  smooth={true}
                  // duration={180}
                  spy={true}
                  to={link.link}
                  offset={link.offset}
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
