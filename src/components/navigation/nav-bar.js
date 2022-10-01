import React, { useState } from "react";
import NavFlyoutContainer from "./nav-flyout-container";
import navItems from "./nav-items"

const NavBar = () => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div>
      <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border border-white rounded hover:text-gray-100 hover:border-white"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow"></div>
          <div className="flex">
            {navItems.map((flyout, index) => 
              <NavFlyoutContainer title={flyout.title} flyoutLinks={flyout.links} key={index} />
            )}
            <span className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100 cursor-pointer">
              About Gold Hill
            </span>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 mr-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
            >
              Pay Bills Online
            </a>
            <a
              href="#"
              className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0"
            >
              Sign in
            </a>
          </div>
        </nav>
      </div>
  );
}

export default NavBar