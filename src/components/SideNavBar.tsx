import { NavLink, useLocation } from "react-router-dom";

export default function SideNavBar() {
  const location = useLocation();

  return (
    <div className="side-nav ">
      <ul className=" flex flex-col items-end z-10 relative mr-[30px] text-3xl gap-[20px] text-[#dad5d5]">
        <li
          className={`${
            location.pathname === "/"
              ? " text-blue-400 border-blue-600 border-gradient-to-r  border-e-4 px-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400 font-extrabold"
              : " hover:-translate-x-1 transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400"
          }`}
        >
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li
          className={`${
            location.pathname === "/skills"
              ? " text-blue-400 border-blue-600 border-gradient-to-r  border-e-4 px-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400 font-extrabold"
              : " hover:-translate-x-1 transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400"
          }`}
        >
          <NavLink to={"/skills"}>Skills</NavLink>
        </li>

        <li
          className={`${
            location.pathname === "/projects"
              ? " text-blue-400 border-blue-600 border-gradient-to-r  border-e-4 px-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400 font-extrabold"
              : " hover:-translate-x-1 transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400"
          }`}
        >
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li
          className={`${
            location.pathname === "/experience"
              ? " text-blue-400 border-blue-600 border-gradient-to-r  border-e-4 px-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400 font-extrabold"
              : " hover:-translate-x-1 transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400"
          }`}
        >
          <NavLink to={"/experience"}>Experience</NavLink>
        </li>
        <li
          className={`${
            location.pathname === "/contact"
              ? " text-blue-400 border-blue-600 border-gradient-to-r  border-e-4 px-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400 font-extrabold"
              : " hover:-translate-x-1 transition duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-400"
          }`}
        >
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
