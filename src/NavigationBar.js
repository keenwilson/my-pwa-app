import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/kw_simplywhite.svg";

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
                <Link to="/techstack">
                  <span className="text-stone-700 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all">
                    Tech Experiences
                  </span>
                </Link>
                <Link to="/projects">
                  <span
                    className="text-stone-700 hover:bg-stone-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
                    aria-current="page"
                  >
                    Featured Projects
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
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        {isMobileOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/techstack">
              <span className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Tech Experiences
              </span>
            </Link>
            <Link to="/projects">
              <span
                className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
               
              >
                Featured Projects
              </span>
            </Link>
            <Link to="/contact">
              <span
                
                className="text-stone-700 hover:bg-stone-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Get in touch
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
