import { FaRegMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { useTheme } from "../hooks/useTheme";
const ToggleTheme = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <div className="flex justify-end">
      <div
        className="w-[60px] h-[60px] bg-slate-100 dark:bg-slate-800 dark:text-white rounded-full fixed z-10 right-[1rem] bottom-[1rem] cursor-pointer shadow-xl flex justify-center items-center"
        onClick={handleChangeTheme}
      >
        {theme === "light" ? <ImSun className="w-[25px] h-[25px]" /> : <FaRegMoon className="w-[25px] h-[25px]" />}
      </div>
    </div>
  );
};

export default ToggleTheme;
