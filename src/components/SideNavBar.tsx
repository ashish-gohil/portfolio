import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  return (
    <div className="side-nav flex flex-col items-end z-10 relative gap-[20px] mr-[30px]">
      <ul>
        <li>
          <NavLink to={"/about"} className={"active:font-bold"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/skills"}>Skills</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/experience"}>Experience</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
