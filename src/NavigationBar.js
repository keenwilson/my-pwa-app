import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/kw_elegant_transparent_500x500.svg";

function NavigationBar(params) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const onMenuToggleClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <nav className="bg-stone-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-500 hover:text-white hover:bg-stone-400 transition-all"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={onMenuToggleClick}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block" */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open.
            Heroicon name: outline/x
            Menu open: "block", Menu closed: "hidden" */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <span className="sr-only">Keen Wilson Logo</span>
                <img alt="" className="h-8 w-auto sm:h-10" src={logo} />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="h-16 flex justify-start items-center space-x-4">
                <Link to="/projects">
                  <span
                    className="text-stone-700 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
                    aria-current="page"
                  >
                    Featured Projects
                  </span>
                </Link>
                <Link to="/techstack">
                  <span className="text-stone-700 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">
                    Tech Experiences
                  </span>
                </Link>
                <Link to="/contact">
                  <span className="text-stone-700 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">
                    Get in touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="bg-stone-300 p-1 rounded-full text-stone-50 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>

              {/* Heroicon name: outline/bell */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {/* Profile */}
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.imgur.com/SrDUHsfh.jpg"
                    alt=""
                  />
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        {isMobileOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Featured Projects
            </a>

            <a
              href="#"
              className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Tech Experiences
            </a>

            <a
              href="#"
              className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
