import { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [navItems, _setNavItems] = useState([
    { id: 1, url: "/", title: "Home" },
    { id: 2, url: "/jobs", title: "Jobs" },
    { id: 3, url: "/add-jobs", title: "Add Jobs" },
  ]);

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Job Search
              </span>
            </Link>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                {navItems.map(({ id, title, url }) => (
                  <NavLink
                    to={url}
                    key={id}
                    className={({ isActive }) =>
                      `text-white ${
                        isActive ? "bg-black" : ""
                      } hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer`
                    }
                  >
                    {title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
