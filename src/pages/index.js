import React from "react"
import { Link } from "gatsby"

import '../components/Header.css'
import Header from '../components/header.js'

const IndexPage = () => (
// To wrap text in VSCode, Alt+Z
<div>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <a href="">Watch the video</a>
      </div>
    </div>

    <h1>Daniel Lopez</h1>
    <p>Senior Product Designer at Eight Bit Studios in Chicago.</p>
    <p>LinkedIn. Dribble. About. Work.</p>
    <Link to="/page-2/">Next page</Link> 
  </div>
)

export default IndexPage
