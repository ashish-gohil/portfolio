import { NavLink, useLocation } from "react-router-dom";

export default function SideNavBar() {
  const location = useLocation();

  return (
    <div className="side-nav flex flex-col items-end z-10 relative gap-[20px] mr-[30px]">
      <ul>
        <li className={`${location.pathname === "/" ? "font-bold" : ""}`}>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li className={`${location.pathname === "/skills" ? "font-bold" : ""}`}>
          <NavLink to={"/skills"}>Skills</NavLink>
        </li>
        <li
          className={`${location.pathname === "/projects" ? "font-bold" : ""}`}
        >
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li
          className={`${
            location.pathname === "/experience" ? "font-bold" : ""
          }`}
        >
          <NavLink to={"/experience"}>Experience</NavLink>
        </li>
        <li
          className={`${location.pathname === "/contact" ? "font-bold" : ""}`}
        >
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
