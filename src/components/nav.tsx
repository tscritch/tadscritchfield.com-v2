import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="w-80 h-9 bg-white rounded-full flex items-center z-30 overflow-hidden">
      <ul
        id="nav-list"
        className="w-full px-1 flex items-center justify-between relative"
      >
        <li className="rounded-full transition-all duration-700">
          <NavLink
            to="about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full ${
                isActive ? "bg-[#BE8EFF] text-white" : "hover:bg-[#BE8EFF]"
              }`
            }
          >
            about
          </NavLink>
        </li>
        <li className="rounded-full transition-all duration-700">
          <NavLink
            to="work"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full ${
                isActive ? "bg-[#FF7A5A] text-white" : "hover:bg-[#FF7A5A]"
              }`
            }
          >
            work
          </NavLink>
        </li>
        <li className="rounded-full transition-all duration-700">
          <NavLink
            to="inspo"
            className={(isActive) =>
              `px-3 py-1 rounded-full ${
                !isActive ? "bg-[#FACC2E] text-white" : "hover:bg-[#FACC2E]"
              }`
            }
          >
            inspo
          </NavLink>
        </li>

        <li className="px-3 py-0.5 rounded-full transition-all duration-700 hover:bg-[#4ACDF6]">
          <a
            href="https://tools.tadscritchfield.com"
            target="_blank"
            className="flex items-center"
          >
            tools <span className="text-xs pl-1">↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
