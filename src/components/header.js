import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
    <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
    <Link to="/about">Page 2</Link>
    <Link to="/work">Page 2</Link>
    <Link to="/downloads">Page 2</Link>
    <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
