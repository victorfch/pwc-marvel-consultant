import { useState } from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <nav>
      <div className="  w-full p-2">
        <button
          type="button"
          onClick={() => setOpenNavbar(!openNavbar)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul
          className={`${
            openNavbar ? "flex flex-col" : "hidden"
          } md:flex md:flex-row`}
        >
          <li className="p-3">
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                isActive ? "text-blue-900" : "text-blue-400 hover:text-blue-700"
              }
            >
              Characters
            </NavLink>
          </li>
          <li className="p-3">
            <NavLink
              to="/series"
              className={({ isActive }) =>
                isActive ? "text-blue-900" : "text-blue-400 hover:text-blue-700"
              }
            >
              Series
            </NavLink>
          </li>
          <li className="p-3">
            <NavLink
              to="/comics"
              className={({ isActive }) =>
                isActive ? "text-blue-900" : "text-blue-400 hover:text-blue-700"
              }
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
