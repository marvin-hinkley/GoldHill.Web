import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./navigation/nav-bar"

function Header({ siteTitle }) {
  return (
    <header className="flex flex-wrap items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          {siteTitle}Gold Hill
        </Link>
      </div>
      <NavBar />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Gold Hill`,
}

export default Header
