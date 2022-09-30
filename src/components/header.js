import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="sticky flex flex-wrap items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          {siteTitle}Gold Hill
        </Link>
      </div>
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
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow"></div>
        <div>
          <Link
            to={``}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100"
          >
            Residents
          </Link>
          <Link
            to={`/`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100"
          >
            Government
          </Link>
          <Link
            to={`/`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100"
          >
            Business
          </Link>
          <Link
            to={`/`}
            className="block mt-4 mr-4 lg:inline-block lg:mt-0 hover:text-gray-100"
          >
            About Gold Hill
          </Link>
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
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Gold Hill`,
}

export default Header
